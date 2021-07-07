## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### class binding
`button [class.active]="isActive"`

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
{{ text | summary:10 }}
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
```

### components