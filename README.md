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


