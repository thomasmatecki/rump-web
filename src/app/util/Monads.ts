/**
 *
 *
 */

export type F0<R> = (() => R)
export type F1<A, R> = ((A) => R)
export type F2<A0, A1, R> = ((A0, A1) => R)
export type L0<A, R> = F1<A, R>
export type L1<A, R> = L0<L0<A, R>, R>
export type R0<A, R> = F1<A, R>
export type R1<A, R> = F1<A, R0<A, R>>


export abstract class Option<T> {

  static fromNullable<A>(value: A | null): Option<A> {
    return (value === null) ? None : new Some<A>(value)
  }

  static fold<A, R>(ifNone: F0<R>, ifSome: L1<A, R>): F1<Option<A>, R> {
    return that => {
      return that.fold(ifNone, ifSome);
    }
  }

  abstract isDefined(): boolean

  abstract get(): T

  abstract map<R>(op: L0<T, R>): Option<R>

  abstract getOrElse<A>(elseVal: F0<T>): T

  /**
   * Like scala's API, i.e. fold[B](ifEmpty: ⇒ B)(f: (A) ⇒ B): B
   */

  folded<R>(ifNone: () => R): L1<T, R> {
    return (op) => this.map<R>(op).getOrElse(ifNone)
  }

  fold<R>(ifNone: F0<R>, ifSome: L1<T, R>): R {
    return this.folded(ifNone)(ifSome)
  }
}


export class Some<T> extends Option<T> {
  private readonly value: T;

  constructor(value: T) {
    super();
    this.value = value;
  }

  getOrElse(elseVal: F0<T>): T {
    return this.value
  };

  isDefined(): boolean {
    return true;
  }

  get(): T {
    return this.value;
  }

  map<R>(op: L0<T, R>): Option<R> {
    return new Some(op(this.value));
  }
}


export const None: Option<any> = (
  function () {
    class None extends Option<any> {

      constructor() {
        super();
      }

      map<R>(op: L0<any, R>): Option<R> {
        return this;
      }

      getOrElse<T>(elseVal: F0<T>): T {
        return elseVal();
      }

      isDefined(): boolean {
        return false;
      }

      get(): any {
        throw new Error("No Such Element");
      }
    }

    return new None()
  })();
