const b: string = "5";
const a: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true;
const g: 5 = 5; // 타입자리에다가 아예 고정된 원식 값도 넣을 수 있음
const h: true = true;
const i = "5";
// function add(x: number, y: number): number {
//   return x + y;
// }
const add: (x: number, y: number) => number = (x, y) => x + y;
const arr2: Array<number> = [123, 456]; // <number> 이부분 제네릭
// const arr : string[] = ["123", "456"]
// const arr2 : number[] = [123, 456]
const arr3: [number, number, string] = [123, 456, "hello"]; // type은 3개만 허용함
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// function flus(x: number, y: number): number;
// function flus(x, y) {
//   return x + y;
// }

let w = 123;
w = "hello" as unknown as number; // 앞에 타입을 강제로 바꿔주는 as 라는 것이 있습니다.

try {
  // const array = []; // noImplicitAny가 false일 때
  const array: string[] = [];
  array.push("hello");
  array[0];
} catch (error) {
  error;
}

//
const head: Element = document.querySelector("#head");

// const head = document.querySelector("#head");
// if (head) {
//   // F12를 누르면 타입 정의가 이미 되어있음
//   // 오타도 바로 잡아주고, 수정해줌 (오타로 인한 문제를 줄일 수 있음)
//   head.innerHTML = "hello world";
//   console.log(head);
// }
