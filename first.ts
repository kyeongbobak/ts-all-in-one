// const b: string = "5";
// const a: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = true;
// const g: 5 = 5; // 타입자리에다가 아예 고정된 원식 값도 넣을 수 있음
// const h: true = true;
// const i = "5";
// function add(x: number, y: number): number {
//   return x + y;
// }
// const add: (x: number, y: number) => number = (x, y) => x + y;
// const arr2: Array<number> = [123, 456]; // <number> 이부분 제네릭
// const arr : string[] = ["123", "456"]
// const arr2 : number[] = [123, 456]
// const arr3: [number, number, string] = [123, 456, "hello"]; // type은 3개만 허용함
// const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// function flus(x: number, y: number): number;
// function flus(x, y) {
//   return x + y;
// }

// let w = 123;
// w = "hello" as unknown as number; // 앞에 타입을 강제로 바꿔주는 as 라는 것이 있습니다.

// try {
// const array = []; // noImplicitAny가 false일 때
//   const array: string[] = [];
//   array.push("hello");
//   array[0];
// } catch (error) {
//   error;
// }

// const head: Element = document.querySelector("#head");

// const head = document.querySelector("#head");
// if (head) {
// F12를 누르면 타입 정의가 이미 되어있음
// 오타도 바로 잡아주고, 수정해줌 (오타로 인한 문제를 줄일 수 있음)
//   head.innerHTML = "hello world";
//   console.log(head);
// }

// const a: string = "hello"; // 무조건 소문자 string
// const b: String = "hell";

// type World = "world" | "hell";
// const a: World = "wor";

// type Greeting = "hello world";
// type Greeting = `hello ${World}`;
// const c: Greeting = `hello hell`;

// function rest(a, ...args: string[]) {
//   console.log(a, args); // 1, [2,3]
// }

// rest("1", "2", "3");

// const tuple: [string, number] = ["1", 1];
// tuple[2] = "hello"; // 3번째 자리에 hello를 넣으려고 해서 에러 남
// tuple.push("hello"); // 근데 이것은 가능

// enum 많이 쓰진 않음
// 그렇게 활용도가 높은 것은 아님
// const enum EDirection {
//   Up = 3,
//   Down = 5,
//   Left = 4,
//   Right = 6,
// }

// const a = EDirection.Up;
// const b = EDirection.Down;
// const c = EDirection.Left;
// const d = EDirection.Right;

//  타입을 명시적으로 지정하고 싶은데, 아래 코드에서 커서를 올렸을 때, 타입이 그냥 "number" 라고 떠서 타입을 직접 지정해주고 싶을 때,
// : 이후에 { Up: 0; Down: 1; Left: 2; Right: 3 } 이렇게 직접 작성해주거나
// 좀 더 편한 방법을 쓰려면 as const 붙여주면 됨
// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// } as const;

// const a = EDirection.Up;
// const c = EDirection.Left;

// dir은 4개 중에 하나여야 한다.
// function walk(dir: EDirection) {
//   console.log(dir);
// }

// walk(EDirection.Up);

// const obj = { a: "123", b: "hello", c: "world" } as const;
// type Key = keyof typeof obj; // key들만 가지고 오고 싶다
// type Key = (typeof obj)[keyof typeof obj]; // value들만 가지고 오고 싶다

// type A = { a: string };
// const a: A = { a: "hello" };

// interface B {
//   a: string;
// }

// const b: B = { a: "hello" };

// function add(x: string | number, y: string | number): string | number {
//   return x + y;
// }
// typescript가 string이라고 착각을 해서 x + y가 붉은 표시
// 결국은 function add(x: string | number, y: string | number): string | number {
//   return x + y;
// } 이것부터가 잘못
// add(1, 2);
// add("1", "2");
// add(1, "2");

// type A = string & number;
// type A = { hello: "world" } & { zero: "cho" };
// const a: A = { hello: "world", zero: "cho" };

// type A = { hello: "world" } | { zero: "cho" };
// const a: A = { hello: "world" };

// type Animal = { breath: true };
// type Poyouryu = Animal & { breed: true };
// type Human = Poyouryu & { think: true };

// const zerocho: Human = { breath: true, breed: true, think: true };

// interface A {
//   breath: true;
// }

// interface B extends A {
//   breed: true;
// }

// const b: B = { breath: true, breed: true };

// 인터페이스 중복 선언이 가능하다
// 선언할때마다 합쳐짐
// 대부분 타입이 아니라 interface를 쓴 다 다른 사람의 인터페이스를 확장할 수 있습니다.
// 그래서 인터페이스를 기반으로 남의 라이브러리 코드를 수정한다
// interface A {
//   talk: () => void;
// }

// interface A {
//   eat: () => void;
// }

// interface A {
//   shit: () => void;
// }

// interface A {
//   sleep: () => void;
// }

// const a: A = { talk() {}, eat() {}, shit() {}, sleep() {} };

// 네이밍 룰
// interface Props {}
// type Type = string | number;
// enum Hello {
//   Left,
//   Right,
// }

// const a: Props = {};

// 객체는 상세할 수록 좁은 타입
// type A = { name: string };
// type B = { age: number };

// type AB = A | B;

// type C = { name: string; age: number };
// type C = A & B;

// const ab: AB = { name: "zerocho" };

// const obj = { name: "zerocho", age: 29, married: false };

// const c: C = { name: "zerocho", age: 29, married: false }; // 잉여 속성 검사라는 새로운 특성이 생겨서 안되는거다

// const c: C = obj;  // 이렇게 데이터를 빼주면 중간에 이런식으로 변수 빼주기만 해도 바로 에러가 사라져 버립니다.

// const c: C = ab; // 대입 안됌

// void의 두 가지 사용법
// type B = { a: string };
// type B = { b: string };

// const obj2: B = { a: "hello", b: "world" };

// function a(): void {
//   return undefined;
// }

// const b = a();

// interface Human {
//   talk: () => void;
// }

// const human: Human = {
//   talk() {
//     return "abc";
//   },
// };

// 바디없이 선언 가능하나 실제 구현부를 만들어줘야 하는데, 구현부를 만들기 싫을 때 declare, javascript로 변환할 때 사라짐
// declare function forEach(arr: number[], callback: (el: number) => undefined): void;

// let target: number[] = [];
// push의 return 값은 number인데 undefined와 number는 다르기 때문에 에러가 나는 것
// forEach([1, 2, 3], (el) => target.push(el));

// 아래 코드에서 callback: (el: number) => undefined) 이부분을 아래와 같이 number로 수정하면,
// declare function forEach(arr: number[], callback: (el: number) => number): void;
// target.push(el) 이부분에서 에러가 나지 않음
// forEach([1, 2, 3], (el) => target.push(el));

// declare function forEach(arr: number[], callback: (el: number) => undefined): void;
// 위의 callback: (el: number) => void 이부분을 void로 선언해도 에러가 나지 않음
// 이유는 매개변수로 넘기는 void는 return 값을 상관하지 않겠다를 보여주는 부분
// forEach([1, 2, 3], (el) => {
//   target.push(el);
// });

// interface A {
//   talk: () => void;
// }

// const a: A = {
//   talk() {
//     console.log("Talking...");
//   },
// };

// type을 잘 모르겠을 때 unknown을 쓰는데, 나중에 타입 지정할 수 있을 때,
// const b: unknown = a.talk(); // b는 undefined가 될 것임

// b를 A 타입이라고 단언하지 말고, a의 talk를 직접 호출하는 방식으로 사용
// a.talk();

// 타입 가드

// 에러 메세지를 마지막 줄만 보면 됨
// function numOrNumArray(a: number | number[]) {
//   if (typeof a === "number") {
//     a.toFixed(1);
//   } else {
//     a.charAt(3);
//   }

//   if (typeof a === "string") {
//     a.charAt(3);
//   }

// 절대 실행될 수 없는 코드 그래서 never라고 지정됨 never라고 하면 사용할 수 없게 됨

//   if (typeof a === "boolean") {
//     a.toString();
//   }

//   if (Array.isArray(a)) {
//     a.concat(4);
//   } else {
//     a.toFixed(3);
//   }
// }

// numOrNumArray(123);
// numOrNumArray([1, 2, 3]);

// class A {
//   aaa() {}
// }

// class B {
//   bbb() {}
// }

// 유효한 javascript 코드
// 클래스간에는 instanceof로 구별한다
// function aOrB(param: A | B) {
//   if (param instanceof A) [param.aaa()];
// }

// aOrB(new A());
// aOrB(new B());

// 1. 타입이 서로 다르고, 속성이 다른 경우
// type B = {
//   type: "b";
//   bbb: string;
// };

// type C = {
//   type: "c";
//   ccc: string;
// };

// type D = {
//   type: "d";
//   ddd: string;
// };

// typescript가 if문에 대해서 타입 구별을 되게 정확하게 해줘
// function typeCheck(a: B | C | D) {
//   if (a.type === "b") {
//     a.bbb;
//   } else if (a.type === "c") {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }

// 2. 타입이 서로 다르고, 속성이 다른 경우
// 보통은 값으로 구분하는 법을 더 많이 쓰긴 함

// type B = { type: "b"; bbb: string };
// type C = { type: "c"; ccc: string };
// type D = { type: "d"; ddd: string };
// type A = B | C | D;
// function typeCheck(a: A) {
// "bbb" in a는 a의 객체 안에 bbb라는 속성이 있다라는 의미
//   if ("bbb" in a) {
//     a.type;
//   } else if ("ccc" in a) {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }

// 습관들이면 좋은 것
// 객체에 라벨을 달아두기
// const human = { type: "human" };
// const dog = { type: "dog" };
// const cat = { type: "cat" };

// 타입 가드의 하나
// 커스텀 타입 가드
// interface Cat {
//   meow: number;
// }

// interface Dog {
//   bow: number;
// }

// is라는 게 꼭 있어줘야지만 TypeScript가 이 if문 안에서 정확하게 구별해준다
// function catOrDog(a: Cat | Dog): a is Dog {
// 타입 판별을 여러분이 직접 만드세요.
//   if ((a as Cat).meow) {
//     return false;
//   }

//   return true;
// }

// 타입을 구분해주는 커스텀 함수를 여러분이 직접 만들 수 있어요.
// function pet(a: Cat | Dog) {
//   if (catOrDog(a)) {
//     console.log(a.bow);
//   }

//   if ("meow" in a) {
//     console.log(a.meow);
//   }
// }

// const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
//   return input.status === "rejected";
// };
// const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
//   return input.status === "fulfilled";
// };

// typescript 컴파일러 설정에 따라 에러가 달라짐
// const promises = await Promise.allSettled([Promise.resolve("a"), Promise.resolve("b")]);
// const errors = promises.filter(isRejected);

// export {};

// const x: {} = "hello";
// const y: Object = "hi"; // {}, object 모든 타입(null, undefined 제외)
// const xx: object = "hi"; // 이것이 실제 객체
// const yy: object = { hello: "world" }; // object 지양, interface, type, class
// const z: unknown = { hello: "world" }; // unknown도 모든 값을 다 받을 수 있는데, any보다는 좀 더 낫다
// 4.8 버전에서 unknown = {} | null | undefined, unknown을 아래와 같이 if 문 안에 넣으면 변수가 모든 타입을 가리키는 얘가 된다.
// if (z) {
//   z;
// } else {
//   z;
// }

// interface A {
//   readonly a: string; // 속성 실수로 바꾸는거 막아줄 수 있음
//   b: string;
// }

// const aaaa: A = { a: "hello", b: "world" };
// aaaa.a = "123";

// type B = "human" | "mammal" | "animal"; // 인터페이스로는 이렇게 또는이 안됨, 무조건 타입으로 써야함
// type A = { [key in B]: B }; // 맵드 타입스
// type A = { [key: string]: string }; // 어떤 키든 간에 값이 모두 문자열이였으면 좋겠을 때, 인덱스드 시그니처 쓰기
// const aaaa: A = { human: "animal", mammal: "human", animal: "mammal" };

// class A {
//   a: string = "123";
//   b: number = 123;
// }

// class A {
//   private a: "123";
//   #b: number = 123;

// constructor(a: string, b: number = 123) {
//   this.a = a;
//   this.b = b;
// }

//   method() {
//     console.log(this.a, this.#b);
//   }
// }

// type AA = A;
// const a: A = new A("123"); // 클래스 이름은 instance를 가리킨다
// const b: typeof A = A; // 클래스 자체 타입은 type of a이고,

// interface A {
//   readonly a: string;
//   b: string;
// }

// abstract class B {
//   private readonly a: string = "123";
//   b: string = "world";
//   c: string = "wow";

// method() {
//   console.log(this.a);
//   console.log(this.b);
//   console.log(this.c);
// }

//   abstract method(): void;
//   method2() {
//     return "3";
//   }
// }

// class C extends B {
//   method() {
//     console.log(this.a);
//     console.log(this.b);
//     console.log(this.c);
//   }
// }
// new C().a;
// new C().b;
// new C().c;

// public : 클래스 내부, 인스턴스, 상속클래스
// protected : 클래스 내부, 상속클래스,
// private : 클래스 내부, 인스턴스,

// function abc(a: number, b?: number, c?: number) {
//   abc(1);
//   abc(1, 2);
//   abc(1, 2, 3);
// }

// let obj: { a: string; b?: string } = { a: "hello", b: "world" };
// obj = { a: "hello" };

// function add(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// add(1, 2); // 3
// add("1", "2"); // "12"

// function add(x: string, y: string): string;
// function add(x: number, y: number): number;
// function add(x: string | number, y: string | number) {
//   return x + y;
// }

// add("1", 2);
// add("2", 1);

// function add<T extends number | string>(x: T, y: T): T {
//   return x + y;
// }

// add(1, 2); // 3
// add("1", "2"); // "12"

// function add<T extends number, k extends string>(x: T, y: T) {
//   return x + y;
// }

// add(1, 2);
// add("1", "2");

// function add<T extends string | number>(x: T): T {
//   return x;
// }

// add({ a: "hello" });

// string number, string | number

// function add<T extends string[]>(x: T): T {
//   return x;
// }

// add(["1", "2", "3"]);

// <T extends {...}>
// <T extends any[]>
// <T extends (...args : any) => any>
// <T extends abstract new (...ages : any) => any> // 생성자

// const a = (b: number = 3, c: number = 5) => {
//   return "3";
// };

// const a = (b: { children: string } = { children: "zerocho" }) => {};

// const add = <T extends unknown>(x: T, y: T) => ({ x, y });
// const result = add(1, 2);

// interface Array<T> {
//   forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// }

// const a: Array<number> = [1, 2, 3];
// // 선언 뒤에 이름 뒤에 제네릭이 항상 같이 온다.

// a.forEach((value) => {
//   console.log(value);
// });

// ["1", "2", "3"].forEach((value) => {
//   console.log(value);
// });

// [true, false, true].forEach((value) => {
//   console.log(value);
// });

// ["123", 123, true].forEach((value) => {
//   console.log(value);
// });

// function add<T>(x: T, y: T): T {
//   return x;
// }

// add("1", 2);
// add(1, "2");

// add(1, 2);
// add("1", "2");
// add(true, false);

// function add<T>(x: T, y: T): T {
//   return x;
// }

// add<number>(1, 2); //type number로 지정
// add("1", "2");
// add(true, false);

// interface Array<T> {
//   forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
//   map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
//   filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
//   filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
// }

// const predicate = (value: string | number): value is string => typeof value === "string";
// const filtered = ["1", 2, "3", 4, "5"].filter(predicate); // ["1", "3", "5"] string[]

// ["1", 2].filter((value) => typeof value === "string");

// const result = ["1", 2].filter<string extends string | number>((value) => typeof value === "string");

// interface Arr {
//   forEach(callback: (item: string | number) => void): void;
// }
// 아래 함수 형태 보고 추론

// const a: Arr = [1, 2, 3];

// a.forEach((item) => {
//   console.log(item);
// });

// a.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// const b: Arr = ["1", "2", "3"];

// b.forEach((item) => {
//   console.log(item);
// });

// b.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// interface Arr<T> {
//   forEach<T>(callback: (item: T, index: number) => void): void;
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// }

// const a: Arr<number> = [1, 2, 3];

// a.forEach((item) => {
//   console.log(item);
//   item.toFixed(1);
// });

// a.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// const b: Arr<string> = ["1", "2", "3"];

// b.forEach((item) => {
//   console.log(item);
//   item.charAt(3);
// });

// b.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// interface Arr<T> {
//   forEach(callback: (item: T, index: number) => void): void;
//   map<S>(callback: (v: T, i: number) => S): S[]; // s가 다 문자가 된다. string 배열이다.
// map<U>(callbackfn: (value: T) => U): U[];
// }
// b가 정확하게 number로 추측되게 하려면?
// const a: Arr<number> = {
//   forEach(callback) {
//     [1, 2, 3].forEach(callback);
//   },
//   map(callback) {
//     return [1, 2, 3].map(callback);
//   },
// };

// b는 number[]
// const b = a.map((v, i) => v + 1); // [2, 3, 4]

// c는 string[]
// const c = a.map((v, i) => v.toString()); // ["1", "2", "3"]

// const d = a.map((v, i) => v % 2 === 0); // 여기가 boolean으로 나오면, map<S>(callback: (v: T) => S): S[];  이걸 잘 만든거다 무슨 말일까?

// const e: Arr<string> = ["1", "2", "3"];
// const f = e.map((v) => +v);

// interface Arr<T> {
//   forEach(callback: (item: T, index: number) => void): void;
//   map<S>(callback: (v: T, i: number) => S): S[];
//   filter<S extends T>(callback: (v: T) => v is S): S[]; // S extends T 추가 , T가 S로 좁혀질 수 있어
// }

// const a: Arr<number> = [1, 2, 3];

// const b = a.filter((v): v is number => v % 2 === 0); // [2] number[]

// const c: Arr<number | string> = [1, "2", 3, "4", 5];
// const d = c.filter((v) => typeof v === "string"); // ["2", "4"] string
// const e = c.filter((v) => typeof v === "number"); // [1,3,5] number[]

// function a(x: string): number {
//   return +x;
// }

// a("1"); // 1

// type B = (x: string) => number | string;
// const b: B = a; //

// declare function add(x: number, y: number, z?: number): number;
// declare function add(x: number, y: number): number;
// declare function add(x: string, y: string): string;
// declare function add(x: number, y: number, z: number): number;

// add(1, 2);
// add(2, 3, 4);
// add("1", "2");

// interface Add {
//   (x: number, y: number): number;
//   (x: string, y: string): string;
// }

// const add: Add = (x: any, y: any) => x + y;

// class A {
//   add(x: number, y: number): number;
//   add(x: string, y: string): string;
//   add(x: any, y: any) {
//     return x + y;
//   }
// }

// const c = new A().add("1", "2");

// interface Axios {
//   get(): void;
// }

// interface CustomError {
//   name: string;
//   messsage: string;
//   stack?: string;
//   response?: {
//     data: any;
//   };
// }

// declare const axios: Axios;

// async () => {
//   try {
//     await axios.get();
//   } catch (err: unknown) {
//     const customError = err as CustomError;
//     console.error(customError.response?.data);
//     customError.response?.data;
// 타입스크립트는 일회성, 에러를 지정해도, 다시 지정해줘야 한다.
//   }
// };

// async () => {
//   try {
//     await axios.get();
//   } catch (err) {
//     if (err instanceof CustomError) {
//       console.error(err.response?.data);
//       err.response?.data;
//     }
//   }
// };

// interface Profile {
//   name: string;
//   age: number;
//   married: boolean;
// }

// interface NewProfile {
//   name: string;
//   age: number;
// }

// 위와 같이 필드가 중복되는 경우 utility types를 통해 해결

// const zerocho: Profile = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// const newZeroCho: Profile = {
//   name: "zerocho",
//   age: 29,
// };

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

// const zerocho: Profile = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// const newZeroCho: Parthial<Profile> = {
//   name: "zerocho",
//   age: 29,
// };

type Name = Profile["name"];

// const newZeroCho: Pick<Profile, "name" | "age"> = {
//   name: "zerocho",
//   age: 29,
// };

// type P<T, S extends keyof T> = {
//   [key in f S]: T[Key];
// };

// const newZeroCho: Omit<Profile, "married"> = {
//   name: "zerocho",
//   age: 29,
// };

// const zerocho: Profile = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// const newZeroCho: P<Profile, "name" | "age"> = {
//   name: "zerocho",
//   age: 29,
// };

// interface Profile {
//   name: string;
//   age: number;
//   married: boolean;
// }

// type Name = Profile["name"];

// const zerocho: Profile = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// type Animal = "Cat" | "Dog" | "Human";
// type Mammal = Exclude<Animal, "Human">;
// type Human = Extract<Animal, "Cat" | "Dog">;

// type A = Exclude<keyof Profile, "married">;

// type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
// const newZeroCho: O<Profile, "married"> = {
//   name: "zerocho",
//   age: 29,
// };

// const newZeroCho: Omit<Profile, Exclude<keyof Profile, "married">> = {
//   name: "zerocho",
//   age: 29,
// };

// interface Profile {
//   name: string;
//   age: number;
//   married: boolean;
// }

// const zerocho: Profile = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// type A = Exclude<keyof Profile, "married">; // 빼고 싶은 키값을 빼는 것

// S extends keyof any : S는 string | number | symbol
// 제한 조건 많이 알아두기

// type O<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// const newZeroCho: Pick<Profile, Exclude<keyof Profile, "married">> = {
//   name: "zerocho",
//   age: 29,
// };

// const zerocho: Profile = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// type Animal = "Cat" | "Dog" | "Human";
// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;
// type Mammal = Exclude<Animal, "Human">; // "Cat" | "Dog" | never
// type Human = Extract<Animal, "Cat" | "Dog">; // 필요한것 추출해주는 역할

// type A = Exclude<keyof Profile, "married">;

// type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
// const newZeroCho: Omit<Profile, "married"> = {
//   name: "zerocho",
//   age: 29,
// };

// interface Profile {
//   name?: string;
//   age?: number;
//   married?: boolean;
// }

// type Name = Profile["name"];

// type R<T> = {
//   [key in keyof T]-?: T[key]; // 옵셔널이였던 값들 모두 옵셔널 떼고 가져오라는 의미가 바로 -?
// };

// interface 키 값을 모두 필수로 만들고 싶을 때, Required 사용
// const zerocho: R<Profile> = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// interface Obj {
//   [key: string]: number;
// }

// type R<T extends keyof any, S> = {
//   [key in T]: S;
// };

// const a: Obj = { a: 3, b: 5, c: 7 };

// const a: Record<symbol, number> = { a: 3, b: 5, c: 7 };

// interface Obj {
//   [key: string]: number;
// }

// 위 코드를 간단하게 만들어둔 것이

// Record<string, number>

// type A = string | null | boolean | number;

// type B = NonNullable<A>; // 위 A라는 Type에서 null과 undefined를 빼고 가져오고 싶을 때, NonNullable을 쓴다

// Pick, ReadOnly, Record, Partial interface에 적용되는 것들
// Exclude, Extract, NonNullable 등은 key에 적용되는 것들

// type B = N<A>;

// type N<T> = T extends null | undefined ? never : T; // string | boolean | number

// function zip(x: number, y: string, z: boolean): { x: number; y: string; z: boolean } {
//   return { x, y, z };
// }

// type P<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never; // 추론

// 위 z 함수의 return 타입을 가지고 오고 싶다.

// type R<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never; // 추론,

// type Params = Parameters<typeof zip>; // 자동으로 읽어올 수 있게끔 할 수 있다.
// type Ret = ReturnType<typeof zip>;
// type First = Params[0];

// type ConstructorParameters<T extends abstract new (...args : any) => any> = T extends abstract new (...args : infer)

// type InstanceType<T extends abstract new (...args : any) => any> = T extends abstract new (...args : any) => infer R? R : any; // 똑같은 모양을 만들어냄으로서 그 자리에 타입을 찾아내는 infer

// class A {
//   a: string;
//   b: number;
//   c: boolean;

//   constructor(a: string, b: number, c: boolean) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
// }

// const c = new A("123", 456, true); // 인스턴스
// type C = ConstructorParameters<typeof A>; // typeof 클래스가 생성자
// type I = InstanceType<typeof A>;

const p1 = Promise.resolve(1)
  // Promise<number>, Promise<number>, Promise<number>, Promise<string>
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString());

const p2 = Promise.resolve(2); // Promise<number>

const p3 = new Promise((res, rej) => {
  // Promise<unknown>
  setTimeout(res, 1000);
});

Promise.all([p1, p2, p3]).then((result) => {
  // {"0" : string, "1" : number, "2 : unknown"}
  console.log(result); // ["3", 2, undefined]
});

// T = [p1, p2, p3] {"0" : p1, "1" : p2, "2" : p3, length : 3}
// keyof T = "0" | "1" | "2" | "length"

// Awaited은 Promise 중첩된 부분을 풀어주는 것

// type Result = Awaited<{ then: (v: number) => number }>; // thenable
// 이 코드를

// function a(this: Window | typeof obj) {
//   console.log(this.name);
// }

// const obj = { name: "zerocho" };
// const b = a.bind(obj);
// b(); // "zerocho";

// type T = ThisParameterType<typeof a>;

// bind를 통해서 this를 바꿔주는 예시
// const zerocho = {
//   name: "zeorcho",
//   sayHello() {
//     console.log(`hi ${this.name}`);
//   },
// };

// const sayHello = zerocho.sayHello;
// const sayHi = zerocho.sayHello.bind({ name: "nero" });

// function add(a: number, b: number, c: number, d: number, e: number, f: number) {
//   return a + b + c + d + e + f;
// }

// const add1 = add.bind(null);
// add1(1, 2, 3, 4, 5, 6);

// const add2 = add.bind(null, 1);
// add2(2, 3, 4, 5, 6);

// const add3 = add.bind(null, 1, 2); // 이것은 매개변수 각각의 자리에 1,2라는 숫자를 가져다 놓는것이 bind 매개변수의 역할,
// add3(3, 4, 5, 6); // 그리고 인수로 넘길 때도 지정된 매개변수는 제외한 인수를 보내야 함

const a = [1, 2, 3, [1, 2], [[1], [2]]].flat();

type A = {
  name: string;
  age: number;
};

type B = A["1" extends number ? "age" : "name"];

// type 적으로 1을 빼주는게 어떻게 빼줘야할까 그게 너무 궁금했거든요
