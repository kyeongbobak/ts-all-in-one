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

//
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

// // // type C = { name: string; age: number };
// type C = A & B;

// // const ab: AB = { name: "zerocho" };

// const obj = { name: "zerocho", age: 29, married: false };

// // const c: C = { name: "zerocho", age: 29, married: false }; // 잉여 속성 검사라는 새로운 특성이 생겨서 안되는거다

// // const c: C = obj;  // 이렇게 데이터를 빼주면 중간에 이런식으로 변수 빼주기만 해도 바로 에러가 사라져 버립니다.

// // const c: C = ab; // 대입 안됌
