## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Angular Codes

### Interface

```
export interface MyTable {
    name: string;
    email: string;
}
const tableData: MyTable[] = [
    {name: "john", email: "john@gmail.com"}
    {name: "maria", email: "maria@gmail.com"}
]
```

### class binding

`button [class.active]="isActive"`

### Property & Attribute binding

```
<img [src]="imageUrl">
<td [colspan]="colSpan">
<p [textContent]="text">
```

### style binding

`button [style.color]="isActive ? 'blue': 'white"`

### event binding

```
button (click)="clickBtn($event)"
// clickBtn(e) => e.preventDefault()....
```

### event filter

`input (keyup.enter)="onKeyUp($event)"`

### template variable

```
input #email (keyup.enter)="onKeyUp(email.value)"
// onKeyUp(email) => console.log(email)
```

### one way binding

```
input [value]="email" (keyup.enter)="onKeyUp()"
// email = "me@ex.cm";
// onKeyUp() => console.log(this.email)
```

### two way binding

```
input [(ngModel)]="email" (keyup.enter)="onKeyUp()"
email = "me@ex.cm";
onKeyUp() => console.log(this.email)
imports: [..., FormsModule]
```

### pipes

1. uppercase
2. lowercase
3. number // 30,123
   1. number:'2.2-3' // minDigit.minDec-maxDec => 05.001 or 05.123
4. currency:'AUD':true:'3.2-3' // AUD - currency type, true to show symbol, minDigit.minDec-maxDec
5. date:'shortdate' // datepipe for more examples

### custom pipe

```
{{ text | custom:10 }}
+custom.pipe.ts
@Pipe({
    name: 'custom'
})
export class CustomPipe implements PipeTransform {
    transform(value: any, args?: any ) {
        let limit = args ? args: 50
        return value.substr(0, limit) + '...';
    }
}
@NgModule({
  declarations: [CustomPipe]
```

### Bind Input to Component

```
<component [isActive]="isActive"></component>
1. @Input isActive: boolean;
2. @component ({
     ....,
     inputs: [isActive]
   })
   isActive: boolean;

alias:
<component [isSelected]="isSelected"></component>
@Input(isSelected) isActive: boolean;
```

### Bind Output to component

```
<component [isActive]="isActive" (change)="isActiveChange()"></component>
@Output() change = new EventEmitter();
this.change.emit();

alias:
@Output('isSelectedChange')
```

### ngContent

```
<app-component>
    <div class="title">Title</div>
</app-component>

app.component.html:
<div class="container">
    <div class="head">
        <ng-content select=".title"></ng-content>
    </div>
</div>
```

### ngContainer

```
<app-component>
    <ng-container class="title">Title</ng-container>
</app-component>

app.component.html:
<div class="container">
    <div class="head">
        <ng-content select=".title"></ng-content>
    </div>
</div>
```

### hidden

```
<div [hidden]="data.list == 0"></div>
```

### ngIf

```
<div *ngIf="data.length > 0; then showItem else noItem"></div>

<ng-template #showItem>List of item</ng-template>
<ng-template #noItem>No Items</ng-template>
```

### ngSwitchCase

```
<div [ngSwitch]="alphabet">
    <div *ngSwitchCase="a">A</div>
    ....
    <div *ngSwitchDefault>Default</div>
</div>

alphabet:string = "a"
```

### ngFor

```
<ul *ngFor="let item of datas; index as idx; even as evenItem">
    <li [class.even]="evenItem ? isEven : null">{{idx}} - {{item.name}}</li>
</ul>
```

### ngFor TrackBy

TrackBy is used for optimization. When a set of Data is loaded in DOM, it will be memorised by angular. If same data is fetched loaded again, say on a click, then it won't rerender.

```
<ul *ngFor="let item of datas; trackBy: trackItem">
    <li>{{item.name}}</li>
</ul>
trackItem(index, item) {
    return item ? item.id : undefined;
}
```

### ngClass & ngStyle

```
<div
    [ngClass]="{
        "isActive": isActive,
        'isSelected': isSelected
    }"
    [ngStyle]="{
        "backgroundColor": error ? 'red' : 'transparent',
        'color': error ? 'red' : 'transparent'
    }"
>
    some text...
</div>
```

### custom directive

```
<input type="text" [inputFormat]="'lowercase'">

+InputFormatDirective:
@Directive({
    selector: '[inputFormat]'
})
constructor(private element: ElementRef) {}
@Input('inputFormat') case;
@HostListner('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if(case == "lowercase") {
        this.el.nativeElement.value = value.toLowerCase();
    } else {
        this.el.nativeElement.value = value.toUpperCase();
    }
}
```

### ngValue

input value can normally be a string. ngValue is used to bind a complex value ex:object.

```
<select>
    <option *ngFor="let option of selectOptions" [ngValue]="option">
```

### Template form

For building a simple form

```
<form class="p-3" (ngSubmit)="onSubmit(sampleForm)" #sampleForm="ngForm">

    <input
        name="email"
        ngModel
        #email="ngModel"
        minlength="8"
        ....
    />

    <div *ngIf="email?.errors?.required">...</div>

    <div *ngIf="email?.errors?.minlength">
        Please enter atleast {{ email?.errors?.minlength.requiredLength }} characters
    </div>

    <button [disabled]="sampleForm.form.invalid" >

onSubmit(sampleForm: any) {
    if (sampleForm.form.valid) { .. }
    let email = sampleForm.value.email
}
```

### Reactive form

for building a complex form with validations and more controls

```
<form [formGroup]="myForm">
    <input
        formControlName="email"
        ....
    >
    <div
        class="error"
        *ngIf="myForm.get('email').invalid"
        (or)
        *ngIf="getEmail.invalid && getEmail.touched"
    >
        Required
    </div>

myForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.noSpace
    ]),
    ....
});

get getEmail() {
    return this.myForm.get('email');
}
```

### Custom validation (Synchronus)

```
+custom.validator.ts
export class CustomValidators {
    static noSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0 ) {
            return { noSpace : true };
        }
        return null;
    }
}
```

### Asynchronous validation

```
<input
    formControlName="name"
    ....
>
<div *ngIf="name.pending">Checking...</div>
<div class="error" *ngIf="name.errors.uniqueName">
    Not Unique Name
</div>

myForm = new FormGroup({
    name: new FormControl(
        "",
        Validators.required,
        CustomValidators.uniqueName,
    ),
    ....
});

+custom.validator.ts
export class CustomValidators {
    static uniqueName(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if(...Call API to check) {
                resolve ({ uniqueName : true });
            } else {
                reject null;
            }
        });
    }
}
```

### Custom Validation on Form

Add a form error after the form submit.

```
<form [formGroup]="myForm" (ngSubmit)="login()">
    <div class="error" *ngIf="myForm.errors.invalidLogin">
        Invalid login details...
    </div>

myForm = new FromGroup({ ... })
login() {
    this.myForm.setErrors({
        invalidLogin: true,
    })
}
```

### Nested group in Reactive Form

```
<form [formGroup]="myForm">
    <input formControlName="name" ...>
    <div formGroupName="personal">
        <input formControlName="age" ...>
    </div>

myForm = new FromGroup({
    name: new FormControl(''),
    personal: new FormGroup({
        age: new FormControl(''),
    })
})

```

### Build Form Array using FormBuilder

```
<form [formGroup]="myForm">
    <div *ngFor="let batch_items of t.controls; let i = index">
        <div [formGroup]="batch_items">
            <div class="form-group">
                <label>Name</label>
                <input formControlName="batch_name" ... />
            </div>
            <p *ngIf="batch_items.controls.batch_name.errors?.required">
                This field is required
            </p>
            ........
        </div>
    </div>
</form>

constructor(private fb: FormBuilder) {}

this.myForm = this.fb.group({
    batch_items: this.fb.array([this.buildBatch()])
});

get f() { return this.myForm.controls; }
get t() { return this.f.batch_items as FormArray; }

onAddBatch() {
    this.t.push(this.buildBatch());
}

buildBatch() {
    return this.fb.group({
        batch_name: ['', Validators.required],
        ....
    })
}

onDeleteBatch(i) {
    this.t.removeAt(i);
}
```

### HTTP services

Patch -> Send only the key to be updated from the body to the API
ex: update only name from {name: '', age: '', dob: ''}
Put -> Send full body to the API for update

```
import { Http } from '@angular/http';
constructor(public http: Http) { }

this.http.get("url").subscribe(res => res.json());
this.http.post("url", JSON.stringify(body)).subscribe(res => res.json());
this.http.patch("url" + id, JSON.stringify( { name: "John" } )).subscribe(res => res.json());
this.http.put("url" + id, JSON.stringify(body)).subscribe(res => res.json());
this.http.delete("url" + id).subscribe(res => res.json());

+ app.module.ts
imports: [
    HttpModule
]
```

### Create services

```
constructor(private api: ApiService) {}
this.api.getData().subscribe(res => ... )
this.api.postData(id, value).subscribe(
    res => {
        console.log(res.json())
    },
    error: Response => {
        console.log("error ", error)
    }
);

@Injectable()
export class ApiService {
    private url: "www.baseurl.com/";

    constructor(private http: Http) {}

    getData() {
        return this.http.get(this.url)
            .catch((error: Response) => {
                return Observable.throw(new AppError(error))
            })
    }

    postData(id, body) {
        return this.http.post('this.url' + id, JSON.stringify(body));
    }
}

+ app.module.ts
providers: [
    ApiService,
    ....
]
```

### Route Parameters

```
path: 'post/:id'
constructor(private route: ActivatedRoute) {}

this.route.paramMap.subscribe(param => {
    param.get('id');
})
this.route.snapshot.params.id;

// query params /post?id=2&type=latest
this.route.queryParamMap.subscribe(param => {
    param.get('id');
});
this.route.snapshot.queryParamMap.get('id')
```

### Router link with multiple params

Url: www.example.com/post/2/latest

`<a [routerLink]="['/post', post.id, post.type]" >`

### Router link with query params

Url: www.example.com/post/?id=2&type=latest

`<a [routerLink]="/post" [queryParams]="{ id: 2, type: 'latest' }" >`

### Router Navigation

Url: www.example.com/post?id=1&order=newest

```
constructor(private route: ActivatedRoute) {}

this.router.navigate(['post'],{
    queryParams: { id: 1, type: 'latest' }
})
```
