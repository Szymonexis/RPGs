import { Constructor } from "./types";

export function $as<T>(val: any, classConstructor: Constructor<T>): T {
  const classInstance = new classConstructor();
  return val as typeof classInstance;
}
