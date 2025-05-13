
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RecyclingContainer
 * 
 */
export type RecyclingContainer = $Result.DefaultSelection<Prisma.$RecyclingContainerPayload>
/**
 * Model RecyclingEntry
 * 
 */
export type RecyclingEntry = $Result.DefaultSelection<Prisma.$RecyclingEntryPayload>
/**
 * Model Lottery
 * 
 */
export type Lottery = $Result.DefaultSelection<Prisma.$LotteryPayload>
/**
 * Model LotteryTicket
 * 
 */
export type LotteryTicket = $Result.DefaultSelection<Prisma.$LotteryTicketPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recyclingContainer`: Exposes CRUD operations for the **RecyclingContainer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecyclingContainers
    * const recyclingContainers = await prisma.recyclingContainer.findMany()
    * ```
    */
  get recyclingContainer(): Prisma.RecyclingContainerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recyclingEntry`: Exposes CRUD operations for the **RecyclingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecyclingEntries
    * const recyclingEntries = await prisma.recyclingEntry.findMany()
    * ```
    */
  get recyclingEntry(): Prisma.RecyclingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lottery`: Exposes CRUD operations for the **Lottery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lotteries
    * const lotteries = await prisma.lottery.findMany()
    * ```
    */
  get lottery(): Prisma.LotteryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lotteryTicket`: Exposes CRUD operations for the **LotteryTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LotteryTickets
    * const lotteryTickets = await prisma.lotteryTicket.findMany()
    * ```
    */
  get lotteryTicket(): Prisma.LotteryTicketDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RecyclingContainer: 'RecyclingContainer',
    RecyclingEntry: 'RecyclingEntry',
    Lottery: 'Lottery',
    LotteryTicket: 'LotteryTicket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "recyclingContainer" | "recyclingEntry" | "lottery" | "lotteryTicket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RecyclingContainer: {
        payload: Prisma.$RecyclingContainerPayload<ExtArgs>
        fields: Prisma.RecyclingContainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecyclingContainerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecyclingContainerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>
          }
          findFirst: {
            args: Prisma.RecyclingContainerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecyclingContainerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>
          }
          findMany: {
            args: Prisma.RecyclingContainerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>[]
          }
          create: {
            args: Prisma.RecyclingContainerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>
          }
          createMany: {
            args: Prisma.RecyclingContainerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecyclingContainerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>[]
          }
          delete: {
            args: Prisma.RecyclingContainerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>
          }
          update: {
            args: Prisma.RecyclingContainerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>
          }
          deleteMany: {
            args: Prisma.RecyclingContainerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecyclingContainerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecyclingContainerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>[]
          }
          upsert: {
            args: Prisma.RecyclingContainerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingContainerPayload>
          }
          aggregate: {
            args: Prisma.RecyclingContainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecyclingContainer>
          }
          groupBy: {
            args: Prisma.RecyclingContainerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecyclingContainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecyclingContainerCountArgs<ExtArgs>
            result: $Utils.Optional<RecyclingContainerCountAggregateOutputType> | number
          }
        }
      }
      RecyclingEntry: {
        payload: Prisma.$RecyclingEntryPayload<ExtArgs>
        fields: Prisma.RecyclingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecyclingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecyclingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>
          }
          findFirst: {
            args: Prisma.RecyclingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecyclingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>
          }
          findMany: {
            args: Prisma.RecyclingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>[]
          }
          create: {
            args: Prisma.RecyclingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>
          }
          createMany: {
            args: Prisma.RecyclingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecyclingEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>[]
          }
          delete: {
            args: Prisma.RecyclingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>
          }
          update: {
            args: Prisma.RecyclingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>
          }
          deleteMany: {
            args: Prisma.RecyclingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecyclingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecyclingEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>[]
          }
          upsert: {
            args: Prisma.RecyclingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingEntryPayload>
          }
          aggregate: {
            args: Prisma.RecyclingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecyclingEntry>
          }
          groupBy: {
            args: Prisma.RecyclingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecyclingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecyclingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<RecyclingEntryCountAggregateOutputType> | number
          }
        }
      }
      Lottery: {
        payload: Prisma.$LotteryPayload<ExtArgs>
        fields: Prisma.LotteryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotteryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotteryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>
          }
          findFirst: {
            args: Prisma.LotteryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotteryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>
          }
          findMany: {
            args: Prisma.LotteryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>[]
          }
          create: {
            args: Prisma.LotteryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>
          }
          createMany: {
            args: Prisma.LotteryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LotteryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>[]
          }
          delete: {
            args: Prisma.LotteryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>
          }
          update: {
            args: Prisma.LotteryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>
          }
          deleteMany: {
            args: Prisma.LotteryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LotteryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LotteryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>[]
          }
          upsert: {
            args: Prisma.LotteryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPayload>
          }
          aggregate: {
            args: Prisma.LotteryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLottery>
          }
          groupBy: {
            args: Prisma.LotteryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotteryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LotteryCountArgs<ExtArgs>
            result: $Utils.Optional<LotteryCountAggregateOutputType> | number
          }
        }
      }
      LotteryTicket: {
        payload: Prisma.$LotteryTicketPayload<ExtArgs>
        fields: Prisma.LotteryTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotteryTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotteryTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>
          }
          findFirst: {
            args: Prisma.LotteryTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotteryTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>
          }
          findMany: {
            args: Prisma.LotteryTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>[]
          }
          create: {
            args: Prisma.LotteryTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>
          }
          createMany: {
            args: Prisma.LotteryTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LotteryTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>[]
          }
          delete: {
            args: Prisma.LotteryTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>
          }
          update: {
            args: Prisma.LotteryTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>
          }
          deleteMany: {
            args: Prisma.LotteryTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LotteryTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LotteryTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>[]
          }
          upsert: {
            args: Prisma.LotteryTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryTicketPayload>
          }
          aggregate: {
            args: Prisma.LotteryTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLotteryTicket>
          }
          groupBy: {
            args: Prisma.LotteryTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotteryTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.LotteryTicketCountArgs<ExtArgs>
            result: $Utils.Optional<LotteryTicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    recyclingContainer?: RecyclingContainerOmit
    recyclingEntry?: RecyclingEntryOmit
    lottery?: LotteryOmit
    lotteryTicket?: LotteryTicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recyclingEntries: number
    lotteryTickets: number
    wonLotteries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recyclingEntries?: boolean | UserCountOutputTypeCountRecyclingEntriesArgs
    lotteryTickets?: boolean | UserCountOutputTypeCountLotteryTicketsArgs
    wonLotteries?: boolean | UserCountOutputTypeCountWonLotteriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecyclingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLotteryTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotteryTicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWonLotteriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotteryWhereInput
  }


  /**
   * Count Type RecyclingContainerCountOutputType
   */

  export type RecyclingContainerCountOutputType = {
    recyclingEntries: number
  }

  export type RecyclingContainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recyclingEntries?: boolean | RecyclingContainerCountOutputTypeCountRecyclingEntriesArgs
  }

  // Custom InputTypes
  /**
   * RecyclingContainerCountOutputType without action
   */
  export type RecyclingContainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainerCountOutputType
     */
    select?: RecyclingContainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecyclingContainerCountOutputType without action
   */
  export type RecyclingContainerCountOutputTypeCountRecyclingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingEntryWhereInput
  }


  /**
   * Count Type RecyclingEntryCountOutputType
   */

  export type RecyclingEntryCountOutputType = {
    lotteryTickets: number
  }

  export type RecyclingEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotteryTickets?: boolean | RecyclingEntryCountOutputTypeCountLotteryTicketsArgs
  }

  // Custom InputTypes
  /**
   * RecyclingEntryCountOutputType without action
   */
  export type RecyclingEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntryCountOutputType
     */
    select?: RecyclingEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecyclingEntryCountOutputType without action
   */
  export type RecyclingEntryCountOutputTypeCountLotteryTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotteryTicketWhereInput
  }


  /**
   * Count Type LotteryCountOutputType
   */

  export type LotteryCountOutputType = {
    lotteryTickets: number
  }

  export type LotteryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotteryTickets?: boolean | LotteryCountOutputTypeCountLotteryTicketsArgs
  }

  // Custom InputTypes
  /**
   * LotteryCountOutputType without action
   */
  export type LotteryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryCountOutputType
     */
    select?: LotteryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LotteryCountOutputType without action
   */
  export type LotteryCountOutputTypeCountLotteryTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotteryTicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    barcode: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    barcode: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    barcode: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    barcode?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    barcode?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    barcode?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    barcode: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barcode?: boolean
    recyclingEntries?: boolean | User$recyclingEntriesArgs<ExtArgs>
    lotteryTickets?: boolean | User$lotteryTicketsArgs<ExtArgs>
    wonLotteries?: boolean | User$wonLotteriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barcode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barcode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barcode?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "createdAt" | "updatedAt" | "barcode", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recyclingEntries?: boolean | User$recyclingEntriesArgs<ExtArgs>
    lotteryTickets?: boolean | User$lotteryTicketsArgs<ExtArgs>
    wonLotteries?: boolean | User$wonLotteriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recyclingEntries: Prisma.$RecyclingEntryPayload<ExtArgs>[]
      lotteryTickets: Prisma.$LotteryTicketPayload<ExtArgs>[]
      wonLotteries: Prisma.$LotteryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
      barcode: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recyclingEntries<T extends User$recyclingEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$recyclingEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lotteryTickets<T extends User$lotteryTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$lotteryTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wonLotteries<T extends User$wonLotteriesArgs<ExtArgs> = {}>(args?: Subset<T, User$wonLotteriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly barcode: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recyclingEntries
   */
  export type User$recyclingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    where?: RecyclingEntryWhereInput
    orderBy?: RecyclingEntryOrderByWithRelationInput | RecyclingEntryOrderByWithRelationInput[]
    cursor?: RecyclingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecyclingEntryScalarFieldEnum | RecyclingEntryScalarFieldEnum[]
  }

  /**
   * User.lotteryTickets
   */
  export type User$lotteryTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    where?: LotteryTicketWhereInput
    orderBy?: LotteryTicketOrderByWithRelationInput | LotteryTicketOrderByWithRelationInput[]
    cursor?: LotteryTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotteryTicketScalarFieldEnum | LotteryTicketScalarFieldEnum[]
  }

  /**
   * User.wonLotteries
   */
  export type User$wonLotteriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    where?: LotteryWhereInput
    orderBy?: LotteryOrderByWithRelationInput | LotteryOrderByWithRelationInput[]
    cursor?: LotteryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotteryScalarFieldEnum | LotteryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RecyclingContainer
   */

  export type AggregateRecyclingContainer = {
    _count: RecyclingContainerCountAggregateOutputType | null
    _avg: RecyclingContainerAvgAggregateOutputType | null
    _sum: RecyclingContainerSumAggregateOutputType | null
    _min: RecyclingContainerMinAggregateOutputType | null
    _max: RecyclingContainerMaxAggregateOutputType | null
  }

  export type RecyclingContainerAvgAggregateOutputType = {
    capacity: number | null
    currentFillLevel: number | null
  }

  export type RecyclingContainerSumAggregateOutputType = {
    capacity: number | null
    currentFillLevel: number | null
  }

  export type RecyclingContainerMinAggregateOutputType = {
    id: string | null
    location: string | null
    area: string | null
    capacity: number | null
    currentFillLevel: number | null
    lastEmptied: Date | null
  }

  export type RecyclingContainerMaxAggregateOutputType = {
    id: string | null
    location: string | null
    area: string | null
    capacity: number | null
    currentFillLevel: number | null
    lastEmptied: Date | null
  }

  export type RecyclingContainerCountAggregateOutputType = {
    id: number
    location: number
    area: number
    capacity: number
    currentFillLevel: number
    lastEmptied: number
    _all: number
  }


  export type RecyclingContainerAvgAggregateInputType = {
    capacity?: true
    currentFillLevel?: true
  }

  export type RecyclingContainerSumAggregateInputType = {
    capacity?: true
    currentFillLevel?: true
  }

  export type RecyclingContainerMinAggregateInputType = {
    id?: true
    location?: true
    area?: true
    capacity?: true
    currentFillLevel?: true
    lastEmptied?: true
  }

  export type RecyclingContainerMaxAggregateInputType = {
    id?: true
    location?: true
    area?: true
    capacity?: true
    currentFillLevel?: true
    lastEmptied?: true
  }

  export type RecyclingContainerCountAggregateInputType = {
    id?: true
    location?: true
    area?: true
    capacity?: true
    currentFillLevel?: true
    lastEmptied?: true
    _all?: true
  }

  export type RecyclingContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingContainer to aggregate.
     */
    where?: RecyclingContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingContainers to fetch.
     */
    orderBy?: RecyclingContainerOrderByWithRelationInput | RecyclingContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecyclingContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingContainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecyclingContainers
    **/
    _count?: true | RecyclingContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecyclingContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecyclingContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecyclingContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecyclingContainerMaxAggregateInputType
  }

  export type GetRecyclingContainerAggregateType<T extends RecyclingContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateRecyclingContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecyclingContainer[P]>
      : GetScalarType<T[P], AggregateRecyclingContainer[P]>
  }




  export type RecyclingContainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingContainerWhereInput
    orderBy?: RecyclingContainerOrderByWithAggregationInput | RecyclingContainerOrderByWithAggregationInput[]
    by: RecyclingContainerScalarFieldEnum[] | RecyclingContainerScalarFieldEnum
    having?: RecyclingContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecyclingContainerCountAggregateInputType | true
    _avg?: RecyclingContainerAvgAggregateInputType
    _sum?: RecyclingContainerSumAggregateInputType
    _min?: RecyclingContainerMinAggregateInputType
    _max?: RecyclingContainerMaxAggregateInputType
  }

  export type RecyclingContainerGroupByOutputType = {
    id: string
    location: string
    area: string
    capacity: number
    currentFillLevel: number
    lastEmptied: Date | null
    _count: RecyclingContainerCountAggregateOutputType | null
    _avg: RecyclingContainerAvgAggregateOutputType | null
    _sum: RecyclingContainerSumAggregateOutputType | null
    _min: RecyclingContainerMinAggregateOutputType | null
    _max: RecyclingContainerMaxAggregateOutputType | null
  }

  type GetRecyclingContainerGroupByPayload<T extends RecyclingContainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecyclingContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecyclingContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecyclingContainerGroupByOutputType[P]>
            : GetScalarType<T[P], RecyclingContainerGroupByOutputType[P]>
        }
      >
    >


  export type RecyclingContainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    area?: boolean
    capacity?: boolean
    currentFillLevel?: boolean
    lastEmptied?: boolean
    recyclingEntries?: boolean | RecyclingContainer$recyclingEntriesArgs<ExtArgs>
    _count?: boolean | RecyclingContainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingContainer"]>

  export type RecyclingContainerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    area?: boolean
    capacity?: boolean
    currentFillLevel?: boolean
    lastEmptied?: boolean
  }, ExtArgs["result"]["recyclingContainer"]>

  export type RecyclingContainerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    area?: boolean
    capacity?: boolean
    currentFillLevel?: boolean
    lastEmptied?: boolean
  }, ExtArgs["result"]["recyclingContainer"]>

  export type RecyclingContainerSelectScalar = {
    id?: boolean
    location?: boolean
    area?: boolean
    capacity?: boolean
    currentFillLevel?: boolean
    lastEmptied?: boolean
  }

  export type RecyclingContainerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "area" | "capacity" | "currentFillLevel" | "lastEmptied", ExtArgs["result"]["recyclingContainer"]>
  export type RecyclingContainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recyclingEntries?: boolean | RecyclingContainer$recyclingEntriesArgs<ExtArgs>
    _count?: boolean | RecyclingContainerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecyclingContainerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecyclingContainerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecyclingContainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecyclingContainer"
    objects: {
      recyclingEntries: Prisma.$RecyclingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location: string
      area: string
      capacity: number
      currentFillLevel: number
      lastEmptied: Date | null
    }, ExtArgs["result"]["recyclingContainer"]>
    composites: {}
  }

  type RecyclingContainerGetPayload<S extends boolean | null | undefined | RecyclingContainerDefaultArgs> = $Result.GetResult<Prisma.$RecyclingContainerPayload, S>

  type RecyclingContainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecyclingContainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecyclingContainerCountAggregateInputType | true
    }

  export interface RecyclingContainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecyclingContainer'], meta: { name: 'RecyclingContainer' } }
    /**
     * Find zero or one RecyclingContainer that matches the filter.
     * @param {RecyclingContainerFindUniqueArgs} args - Arguments to find a RecyclingContainer
     * @example
     * // Get one RecyclingContainer
     * const recyclingContainer = await prisma.recyclingContainer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecyclingContainerFindUniqueArgs>(args: SelectSubset<T, RecyclingContainerFindUniqueArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecyclingContainer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecyclingContainerFindUniqueOrThrowArgs} args - Arguments to find a RecyclingContainer
     * @example
     * // Get one RecyclingContainer
     * const recyclingContainer = await prisma.recyclingContainer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecyclingContainerFindUniqueOrThrowArgs>(args: SelectSubset<T, RecyclingContainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingContainer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingContainerFindFirstArgs} args - Arguments to find a RecyclingContainer
     * @example
     * // Get one RecyclingContainer
     * const recyclingContainer = await prisma.recyclingContainer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecyclingContainerFindFirstArgs>(args?: SelectSubset<T, RecyclingContainerFindFirstArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingContainer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingContainerFindFirstOrThrowArgs} args - Arguments to find a RecyclingContainer
     * @example
     * // Get one RecyclingContainer
     * const recyclingContainer = await prisma.recyclingContainer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecyclingContainerFindFirstOrThrowArgs>(args?: SelectSubset<T, RecyclingContainerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecyclingContainers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingContainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecyclingContainers
     * const recyclingContainers = await prisma.recyclingContainer.findMany()
     * 
     * // Get first 10 RecyclingContainers
     * const recyclingContainers = await prisma.recyclingContainer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recyclingContainerWithIdOnly = await prisma.recyclingContainer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecyclingContainerFindManyArgs>(args?: SelectSubset<T, RecyclingContainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecyclingContainer.
     * @param {RecyclingContainerCreateArgs} args - Arguments to create a RecyclingContainer.
     * @example
     * // Create one RecyclingContainer
     * const RecyclingContainer = await prisma.recyclingContainer.create({
     *   data: {
     *     // ... data to create a RecyclingContainer
     *   }
     * })
     * 
     */
    create<T extends RecyclingContainerCreateArgs>(args: SelectSubset<T, RecyclingContainerCreateArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecyclingContainers.
     * @param {RecyclingContainerCreateManyArgs} args - Arguments to create many RecyclingContainers.
     * @example
     * // Create many RecyclingContainers
     * const recyclingContainer = await prisma.recyclingContainer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecyclingContainerCreateManyArgs>(args?: SelectSubset<T, RecyclingContainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecyclingContainers and returns the data saved in the database.
     * @param {RecyclingContainerCreateManyAndReturnArgs} args - Arguments to create many RecyclingContainers.
     * @example
     * // Create many RecyclingContainers
     * const recyclingContainer = await prisma.recyclingContainer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecyclingContainers and only return the `id`
     * const recyclingContainerWithIdOnly = await prisma.recyclingContainer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecyclingContainerCreateManyAndReturnArgs>(args?: SelectSubset<T, RecyclingContainerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecyclingContainer.
     * @param {RecyclingContainerDeleteArgs} args - Arguments to delete one RecyclingContainer.
     * @example
     * // Delete one RecyclingContainer
     * const RecyclingContainer = await prisma.recyclingContainer.delete({
     *   where: {
     *     // ... filter to delete one RecyclingContainer
     *   }
     * })
     * 
     */
    delete<T extends RecyclingContainerDeleteArgs>(args: SelectSubset<T, RecyclingContainerDeleteArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecyclingContainer.
     * @param {RecyclingContainerUpdateArgs} args - Arguments to update one RecyclingContainer.
     * @example
     * // Update one RecyclingContainer
     * const recyclingContainer = await prisma.recyclingContainer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecyclingContainerUpdateArgs>(args: SelectSubset<T, RecyclingContainerUpdateArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecyclingContainers.
     * @param {RecyclingContainerDeleteManyArgs} args - Arguments to filter RecyclingContainers to delete.
     * @example
     * // Delete a few RecyclingContainers
     * const { count } = await prisma.recyclingContainer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecyclingContainerDeleteManyArgs>(args?: SelectSubset<T, RecyclingContainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingContainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecyclingContainers
     * const recyclingContainer = await prisma.recyclingContainer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecyclingContainerUpdateManyArgs>(args: SelectSubset<T, RecyclingContainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingContainers and returns the data updated in the database.
     * @param {RecyclingContainerUpdateManyAndReturnArgs} args - Arguments to update many RecyclingContainers.
     * @example
     * // Update many RecyclingContainers
     * const recyclingContainer = await prisma.recyclingContainer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecyclingContainers and only return the `id`
     * const recyclingContainerWithIdOnly = await prisma.recyclingContainer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecyclingContainerUpdateManyAndReturnArgs>(args: SelectSubset<T, RecyclingContainerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecyclingContainer.
     * @param {RecyclingContainerUpsertArgs} args - Arguments to update or create a RecyclingContainer.
     * @example
     * // Update or create a RecyclingContainer
     * const recyclingContainer = await prisma.recyclingContainer.upsert({
     *   create: {
     *     // ... data to create a RecyclingContainer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecyclingContainer we want to update
     *   }
     * })
     */
    upsert<T extends RecyclingContainerUpsertArgs>(args: SelectSubset<T, RecyclingContainerUpsertArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecyclingContainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingContainerCountArgs} args - Arguments to filter RecyclingContainers to count.
     * @example
     * // Count the number of RecyclingContainers
     * const count = await prisma.recyclingContainer.count({
     *   where: {
     *     // ... the filter for the RecyclingContainers we want to count
     *   }
     * })
    **/
    count<T extends RecyclingContainerCountArgs>(
      args?: Subset<T, RecyclingContainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecyclingContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecyclingContainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecyclingContainerAggregateArgs>(args: Subset<T, RecyclingContainerAggregateArgs>): Prisma.PrismaPromise<GetRecyclingContainerAggregateType<T>>

    /**
     * Group by RecyclingContainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingContainerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecyclingContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecyclingContainerGroupByArgs['orderBy'] }
        : { orderBy?: RecyclingContainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecyclingContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecyclingContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecyclingContainer model
   */
  readonly fields: RecyclingContainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecyclingContainer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecyclingContainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recyclingEntries<T extends RecyclingContainer$recyclingEntriesArgs<ExtArgs> = {}>(args?: Subset<T, RecyclingContainer$recyclingEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecyclingContainer model
   */
  interface RecyclingContainerFieldRefs {
    readonly id: FieldRef<"RecyclingContainer", 'String'>
    readonly location: FieldRef<"RecyclingContainer", 'String'>
    readonly area: FieldRef<"RecyclingContainer", 'String'>
    readonly capacity: FieldRef<"RecyclingContainer", 'Int'>
    readonly currentFillLevel: FieldRef<"RecyclingContainer", 'Int'>
    readonly lastEmptied: FieldRef<"RecyclingContainer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecyclingContainer findUnique
   */
  export type RecyclingContainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingContainer to fetch.
     */
    where: RecyclingContainerWhereUniqueInput
  }

  /**
   * RecyclingContainer findUniqueOrThrow
   */
  export type RecyclingContainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingContainer to fetch.
     */
    where: RecyclingContainerWhereUniqueInput
  }

  /**
   * RecyclingContainer findFirst
   */
  export type RecyclingContainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingContainer to fetch.
     */
    where?: RecyclingContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingContainers to fetch.
     */
    orderBy?: RecyclingContainerOrderByWithRelationInput | RecyclingContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingContainers.
     */
    cursor?: RecyclingContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingContainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingContainers.
     */
    distinct?: RecyclingContainerScalarFieldEnum | RecyclingContainerScalarFieldEnum[]
  }

  /**
   * RecyclingContainer findFirstOrThrow
   */
  export type RecyclingContainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingContainer to fetch.
     */
    where?: RecyclingContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingContainers to fetch.
     */
    orderBy?: RecyclingContainerOrderByWithRelationInput | RecyclingContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingContainers.
     */
    cursor?: RecyclingContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingContainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingContainers.
     */
    distinct?: RecyclingContainerScalarFieldEnum | RecyclingContainerScalarFieldEnum[]
  }

  /**
   * RecyclingContainer findMany
   */
  export type RecyclingContainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingContainers to fetch.
     */
    where?: RecyclingContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingContainers to fetch.
     */
    orderBy?: RecyclingContainerOrderByWithRelationInput | RecyclingContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecyclingContainers.
     */
    cursor?: RecyclingContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingContainers.
     */
    skip?: number
    distinct?: RecyclingContainerScalarFieldEnum | RecyclingContainerScalarFieldEnum[]
  }

  /**
   * RecyclingContainer create
   */
  export type RecyclingContainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * The data needed to create a RecyclingContainer.
     */
    data: XOR<RecyclingContainerCreateInput, RecyclingContainerUncheckedCreateInput>
  }

  /**
   * RecyclingContainer createMany
   */
  export type RecyclingContainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecyclingContainers.
     */
    data: RecyclingContainerCreateManyInput | RecyclingContainerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecyclingContainer createManyAndReturn
   */
  export type RecyclingContainerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * The data used to create many RecyclingContainers.
     */
    data: RecyclingContainerCreateManyInput | RecyclingContainerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecyclingContainer update
   */
  export type RecyclingContainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * The data needed to update a RecyclingContainer.
     */
    data: XOR<RecyclingContainerUpdateInput, RecyclingContainerUncheckedUpdateInput>
    /**
     * Choose, which RecyclingContainer to update.
     */
    where: RecyclingContainerWhereUniqueInput
  }

  /**
   * RecyclingContainer updateMany
   */
  export type RecyclingContainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecyclingContainers.
     */
    data: XOR<RecyclingContainerUpdateManyMutationInput, RecyclingContainerUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingContainers to update
     */
    where?: RecyclingContainerWhereInput
    /**
     * Limit how many RecyclingContainers to update.
     */
    limit?: number
  }

  /**
   * RecyclingContainer updateManyAndReturn
   */
  export type RecyclingContainerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * The data used to update RecyclingContainers.
     */
    data: XOR<RecyclingContainerUpdateManyMutationInput, RecyclingContainerUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingContainers to update
     */
    where?: RecyclingContainerWhereInput
    /**
     * Limit how many RecyclingContainers to update.
     */
    limit?: number
  }

  /**
   * RecyclingContainer upsert
   */
  export type RecyclingContainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * The filter to search for the RecyclingContainer to update in case it exists.
     */
    where: RecyclingContainerWhereUniqueInput
    /**
     * In case the RecyclingContainer found by the `where` argument doesn't exist, create a new RecyclingContainer with this data.
     */
    create: XOR<RecyclingContainerCreateInput, RecyclingContainerUncheckedCreateInput>
    /**
     * In case the RecyclingContainer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecyclingContainerUpdateInput, RecyclingContainerUncheckedUpdateInput>
  }

  /**
   * RecyclingContainer delete
   */
  export type RecyclingContainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
    /**
     * Filter which RecyclingContainer to delete.
     */
    where: RecyclingContainerWhereUniqueInput
  }

  /**
   * RecyclingContainer deleteMany
   */
  export type RecyclingContainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingContainers to delete
     */
    where?: RecyclingContainerWhereInput
    /**
     * Limit how many RecyclingContainers to delete.
     */
    limit?: number
  }

  /**
   * RecyclingContainer.recyclingEntries
   */
  export type RecyclingContainer$recyclingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    where?: RecyclingEntryWhereInput
    orderBy?: RecyclingEntryOrderByWithRelationInput | RecyclingEntryOrderByWithRelationInput[]
    cursor?: RecyclingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecyclingEntryScalarFieldEnum | RecyclingEntryScalarFieldEnum[]
  }

  /**
   * RecyclingContainer without action
   */
  export type RecyclingContainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingContainer
     */
    select?: RecyclingContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingContainer
     */
    omit?: RecyclingContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingContainerInclude<ExtArgs> | null
  }


  /**
   * Model RecyclingEntry
   */

  export type AggregateRecyclingEntry = {
    _count: RecyclingEntryCountAggregateOutputType | null
    _avg: RecyclingEntryAvgAggregateOutputType | null
    _sum: RecyclingEntrySumAggregateOutputType | null
    _min: RecyclingEntryMinAggregateOutputType | null
    _max: RecyclingEntryMaxAggregateOutputType | null
  }

  export type RecyclingEntryAvgAggregateOutputType = {
    itemCount: number | null
  }

  export type RecyclingEntrySumAggregateOutputType = {
    itemCount: number | null
  }

  export type RecyclingEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    containerId: string | null
    itemCount: number | null
    timestamp: Date | null
    itemType: string | null
  }

  export type RecyclingEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    containerId: string | null
    itemCount: number | null
    timestamp: Date | null
    itemType: string | null
  }

  export type RecyclingEntryCountAggregateOutputType = {
    id: number
    userId: number
    containerId: number
    itemCount: number
    timestamp: number
    itemType: number
    _all: number
  }


  export type RecyclingEntryAvgAggregateInputType = {
    itemCount?: true
  }

  export type RecyclingEntrySumAggregateInputType = {
    itemCount?: true
  }

  export type RecyclingEntryMinAggregateInputType = {
    id?: true
    userId?: true
    containerId?: true
    itemCount?: true
    timestamp?: true
    itemType?: true
  }

  export type RecyclingEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    containerId?: true
    itemCount?: true
    timestamp?: true
    itemType?: true
  }

  export type RecyclingEntryCountAggregateInputType = {
    id?: true
    userId?: true
    containerId?: true
    itemCount?: true
    timestamp?: true
    itemType?: true
    _all?: true
  }

  export type RecyclingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingEntry to aggregate.
     */
    where?: RecyclingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingEntries to fetch.
     */
    orderBy?: RecyclingEntryOrderByWithRelationInput | RecyclingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecyclingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecyclingEntries
    **/
    _count?: true | RecyclingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecyclingEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecyclingEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecyclingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecyclingEntryMaxAggregateInputType
  }

  export type GetRecyclingEntryAggregateType<T extends RecyclingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateRecyclingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecyclingEntry[P]>
      : GetScalarType<T[P], AggregateRecyclingEntry[P]>
  }




  export type RecyclingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingEntryWhereInput
    orderBy?: RecyclingEntryOrderByWithAggregationInput | RecyclingEntryOrderByWithAggregationInput[]
    by: RecyclingEntryScalarFieldEnum[] | RecyclingEntryScalarFieldEnum
    having?: RecyclingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecyclingEntryCountAggregateInputType | true
    _avg?: RecyclingEntryAvgAggregateInputType
    _sum?: RecyclingEntrySumAggregateInputType
    _min?: RecyclingEntryMinAggregateInputType
    _max?: RecyclingEntryMaxAggregateInputType
  }

  export type RecyclingEntryGroupByOutputType = {
    id: string
    userId: string
    containerId: string
    itemCount: number
    timestamp: Date
    itemType: string
    _count: RecyclingEntryCountAggregateOutputType | null
    _avg: RecyclingEntryAvgAggregateOutputType | null
    _sum: RecyclingEntrySumAggregateOutputType | null
    _min: RecyclingEntryMinAggregateOutputType | null
    _max: RecyclingEntryMaxAggregateOutputType | null
  }

  type GetRecyclingEntryGroupByPayload<T extends RecyclingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecyclingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecyclingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecyclingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], RecyclingEntryGroupByOutputType[P]>
        }
      >
    >


  export type RecyclingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    containerId?: boolean
    itemCount?: boolean
    timestamp?: boolean
    itemType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    container?: boolean | RecyclingContainerDefaultArgs<ExtArgs>
    lotteryTickets?: boolean | RecyclingEntry$lotteryTicketsArgs<ExtArgs>
    _count?: boolean | RecyclingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingEntry"]>

  export type RecyclingEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    containerId?: boolean
    itemCount?: boolean
    timestamp?: boolean
    itemType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    container?: boolean | RecyclingContainerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingEntry"]>

  export type RecyclingEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    containerId?: boolean
    itemCount?: boolean
    timestamp?: boolean
    itemType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    container?: boolean | RecyclingContainerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingEntry"]>

  export type RecyclingEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    containerId?: boolean
    itemCount?: boolean
    timestamp?: boolean
    itemType?: boolean
  }

  export type RecyclingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "containerId" | "itemCount" | "timestamp" | "itemType", ExtArgs["result"]["recyclingEntry"]>
  export type RecyclingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    container?: boolean | RecyclingContainerDefaultArgs<ExtArgs>
    lotteryTickets?: boolean | RecyclingEntry$lotteryTicketsArgs<ExtArgs>
    _count?: boolean | RecyclingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecyclingEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    container?: boolean | RecyclingContainerDefaultArgs<ExtArgs>
  }
  export type RecyclingEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    container?: boolean | RecyclingContainerDefaultArgs<ExtArgs>
  }

  export type $RecyclingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecyclingEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      container: Prisma.$RecyclingContainerPayload<ExtArgs>
      lotteryTickets: Prisma.$LotteryTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      containerId: string
      itemCount: number
      timestamp: Date
      itemType: string
    }, ExtArgs["result"]["recyclingEntry"]>
    composites: {}
  }

  type RecyclingEntryGetPayload<S extends boolean | null | undefined | RecyclingEntryDefaultArgs> = $Result.GetResult<Prisma.$RecyclingEntryPayload, S>

  type RecyclingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecyclingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecyclingEntryCountAggregateInputType | true
    }

  export interface RecyclingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecyclingEntry'], meta: { name: 'RecyclingEntry' } }
    /**
     * Find zero or one RecyclingEntry that matches the filter.
     * @param {RecyclingEntryFindUniqueArgs} args - Arguments to find a RecyclingEntry
     * @example
     * // Get one RecyclingEntry
     * const recyclingEntry = await prisma.recyclingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecyclingEntryFindUniqueArgs>(args: SelectSubset<T, RecyclingEntryFindUniqueArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecyclingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecyclingEntryFindUniqueOrThrowArgs} args - Arguments to find a RecyclingEntry
     * @example
     * // Get one RecyclingEntry
     * const recyclingEntry = await prisma.recyclingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecyclingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, RecyclingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingEntryFindFirstArgs} args - Arguments to find a RecyclingEntry
     * @example
     * // Get one RecyclingEntry
     * const recyclingEntry = await prisma.recyclingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecyclingEntryFindFirstArgs>(args?: SelectSubset<T, RecyclingEntryFindFirstArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingEntryFindFirstOrThrowArgs} args - Arguments to find a RecyclingEntry
     * @example
     * // Get one RecyclingEntry
     * const recyclingEntry = await prisma.recyclingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecyclingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, RecyclingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecyclingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecyclingEntries
     * const recyclingEntries = await prisma.recyclingEntry.findMany()
     * 
     * // Get first 10 RecyclingEntries
     * const recyclingEntries = await prisma.recyclingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recyclingEntryWithIdOnly = await prisma.recyclingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecyclingEntryFindManyArgs>(args?: SelectSubset<T, RecyclingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecyclingEntry.
     * @param {RecyclingEntryCreateArgs} args - Arguments to create a RecyclingEntry.
     * @example
     * // Create one RecyclingEntry
     * const RecyclingEntry = await prisma.recyclingEntry.create({
     *   data: {
     *     // ... data to create a RecyclingEntry
     *   }
     * })
     * 
     */
    create<T extends RecyclingEntryCreateArgs>(args: SelectSubset<T, RecyclingEntryCreateArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecyclingEntries.
     * @param {RecyclingEntryCreateManyArgs} args - Arguments to create many RecyclingEntries.
     * @example
     * // Create many RecyclingEntries
     * const recyclingEntry = await prisma.recyclingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecyclingEntryCreateManyArgs>(args?: SelectSubset<T, RecyclingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecyclingEntries and returns the data saved in the database.
     * @param {RecyclingEntryCreateManyAndReturnArgs} args - Arguments to create many RecyclingEntries.
     * @example
     * // Create many RecyclingEntries
     * const recyclingEntry = await prisma.recyclingEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecyclingEntries and only return the `id`
     * const recyclingEntryWithIdOnly = await prisma.recyclingEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecyclingEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, RecyclingEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecyclingEntry.
     * @param {RecyclingEntryDeleteArgs} args - Arguments to delete one RecyclingEntry.
     * @example
     * // Delete one RecyclingEntry
     * const RecyclingEntry = await prisma.recyclingEntry.delete({
     *   where: {
     *     // ... filter to delete one RecyclingEntry
     *   }
     * })
     * 
     */
    delete<T extends RecyclingEntryDeleteArgs>(args: SelectSubset<T, RecyclingEntryDeleteArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecyclingEntry.
     * @param {RecyclingEntryUpdateArgs} args - Arguments to update one RecyclingEntry.
     * @example
     * // Update one RecyclingEntry
     * const recyclingEntry = await prisma.recyclingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecyclingEntryUpdateArgs>(args: SelectSubset<T, RecyclingEntryUpdateArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecyclingEntries.
     * @param {RecyclingEntryDeleteManyArgs} args - Arguments to filter RecyclingEntries to delete.
     * @example
     * // Delete a few RecyclingEntries
     * const { count } = await prisma.recyclingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecyclingEntryDeleteManyArgs>(args?: SelectSubset<T, RecyclingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecyclingEntries
     * const recyclingEntry = await prisma.recyclingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecyclingEntryUpdateManyArgs>(args: SelectSubset<T, RecyclingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingEntries and returns the data updated in the database.
     * @param {RecyclingEntryUpdateManyAndReturnArgs} args - Arguments to update many RecyclingEntries.
     * @example
     * // Update many RecyclingEntries
     * const recyclingEntry = await prisma.recyclingEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecyclingEntries and only return the `id`
     * const recyclingEntryWithIdOnly = await prisma.recyclingEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecyclingEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, RecyclingEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecyclingEntry.
     * @param {RecyclingEntryUpsertArgs} args - Arguments to update or create a RecyclingEntry.
     * @example
     * // Update or create a RecyclingEntry
     * const recyclingEntry = await prisma.recyclingEntry.upsert({
     *   create: {
     *     // ... data to create a RecyclingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecyclingEntry we want to update
     *   }
     * })
     */
    upsert<T extends RecyclingEntryUpsertArgs>(args: SelectSubset<T, RecyclingEntryUpsertArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecyclingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingEntryCountArgs} args - Arguments to filter RecyclingEntries to count.
     * @example
     * // Count the number of RecyclingEntries
     * const count = await prisma.recyclingEntry.count({
     *   where: {
     *     // ... the filter for the RecyclingEntries we want to count
     *   }
     * })
    **/
    count<T extends RecyclingEntryCountArgs>(
      args?: Subset<T, RecyclingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecyclingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecyclingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecyclingEntryAggregateArgs>(args: Subset<T, RecyclingEntryAggregateArgs>): Prisma.PrismaPromise<GetRecyclingEntryAggregateType<T>>

    /**
     * Group by RecyclingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecyclingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecyclingEntryGroupByArgs['orderBy'] }
        : { orderBy?: RecyclingEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecyclingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecyclingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecyclingEntry model
   */
  readonly fields: RecyclingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecyclingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecyclingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    container<T extends RecyclingContainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecyclingContainerDefaultArgs<ExtArgs>>): Prisma__RecyclingContainerClient<$Result.GetResult<Prisma.$RecyclingContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lotteryTickets<T extends RecyclingEntry$lotteryTicketsArgs<ExtArgs> = {}>(args?: Subset<T, RecyclingEntry$lotteryTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecyclingEntry model
   */
  interface RecyclingEntryFieldRefs {
    readonly id: FieldRef<"RecyclingEntry", 'String'>
    readonly userId: FieldRef<"RecyclingEntry", 'String'>
    readonly containerId: FieldRef<"RecyclingEntry", 'String'>
    readonly itemCount: FieldRef<"RecyclingEntry", 'Int'>
    readonly timestamp: FieldRef<"RecyclingEntry", 'DateTime'>
    readonly itemType: FieldRef<"RecyclingEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecyclingEntry findUnique
   */
  export type RecyclingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingEntry to fetch.
     */
    where: RecyclingEntryWhereUniqueInput
  }

  /**
   * RecyclingEntry findUniqueOrThrow
   */
  export type RecyclingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingEntry to fetch.
     */
    where: RecyclingEntryWhereUniqueInput
  }

  /**
   * RecyclingEntry findFirst
   */
  export type RecyclingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingEntry to fetch.
     */
    where?: RecyclingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingEntries to fetch.
     */
    orderBy?: RecyclingEntryOrderByWithRelationInput | RecyclingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingEntries.
     */
    cursor?: RecyclingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingEntries.
     */
    distinct?: RecyclingEntryScalarFieldEnum | RecyclingEntryScalarFieldEnum[]
  }

  /**
   * RecyclingEntry findFirstOrThrow
   */
  export type RecyclingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingEntry to fetch.
     */
    where?: RecyclingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingEntries to fetch.
     */
    orderBy?: RecyclingEntryOrderByWithRelationInput | RecyclingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingEntries.
     */
    cursor?: RecyclingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingEntries.
     */
    distinct?: RecyclingEntryScalarFieldEnum | RecyclingEntryScalarFieldEnum[]
  }

  /**
   * RecyclingEntry findMany
   */
  export type RecyclingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingEntries to fetch.
     */
    where?: RecyclingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingEntries to fetch.
     */
    orderBy?: RecyclingEntryOrderByWithRelationInput | RecyclingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecyclingEntries.
     */
    cursor?: RecyclingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingEntries.
     */
    skip?: number
    distinct?: RecyclingEntryScalarFieldEnum | RecyclingEntryScalarFieldEnum[]
  }

  /**
   * RecyclingEntry create
   */
  export type RecyclingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a RecyclingEntry.
     */
    data: XOR<RecyclingEntryCreateInput, RecyclingEntryUncheckedCreateInput>
  }

  /**
   * RecyclingEntry createMany
   */
  export type RecyclingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecyclingEntries.
     */
    data: RecyclingEntryCreateManyInput | RecyclingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecyclingEntry createManyAndReturn
   */
  export type RecyclingEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * The data used to create many RecyclingEntries.
     */
    data: RecyclingEntryCreateManyInput | RecyclingEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecyclingEntry update
   */
  export type RecyclingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a RecyclingEntry.
     */
    data: XOR<RecyclingEntryUpdateInput, RecyclingEntryUncheckedUpdateInput>
    /**
     * Choose, which RecyclingEntry to update.
     */
    where: RecyclingEntryWhereUniqueInput
  }

  /**
   * RecyclingEntry updateMany
   */
  export type RecyclingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecyclingEntries.
     */
    data: XOR<RecyclingEntryUpdateManyMutationInput, RecyclingEntryUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingEntries to update
     */
    where?: RecyclingEntryWhereInput
    /**
     * Limit how many RecyclingEntries to update.
     */
    limit?: number
  }

  /**
   * RecyclingEntry updateManyAndReturn
   */
  export type RecyclingEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * The data used to update RecyclingEntries.
     */
    data: XOR<RecyclingEntryUpdateManyMutationInput, RecyclingEntryUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingEntries to update
     */
    where?: RecyclingEntryWhereInput
    /**
     * Limit how many RecyclingEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecyclingEntry upsert
   */
  export type RecyclingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the RecyclingEntry to update in case it exists.
     */
    where: RecyclingEntryWhereUniqueInput
    /**
     * In case the RecyclingEntry found by the `where` argument doesn't exist, create a new RecyclingEntry with this data.
     */
    create: XOR<RecyclingEntryCreateInput, RecyclingEntryUncheckedCreateInput>
    /**
     * In case the RecyclingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecyclingEntryUpdateInput, RecyclingEntryUncheckedUpdateInput>
  }

  /**
   * RecyclingEntry delete
   */
  export type RecyclingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
    /**
     * Filter which RecyclingEntry to delete.
     */
    where: RecyclingEntryWhereUniqueInput
  }

  /**
   * RecyclingEntry deleteMany
   */
  export type RecyclingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingEntries to delete
     */
    where?: RecyclingEntryWhereInput
    /**
     * Limit how many RecyclingEntries to delete.
     */
    limit?: number
  }

  /**
   * RecyclingEntry.lotteryTickets
   */
  export type RecyclingEntry$lotteryTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    where?: LotteryTicketWhereInput
    orderBy?: LotteryTicketOrderByWithRelationInput | LotteryTicketOrderByWithRelationInput[]
    cursor?: LotteryTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotteryTicketScalarFieldEnum | LotteryTicketScalarFieldEnum[]
  }

  /**
   * RecyclingEntry without action
   */
  export type RecyclingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingEntry
     */
    select?: RecyclingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingEntry
     */
    omit?: RecyclingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingEntryInclude<ExtArgs> | null
  }


  /**
   * Model Lottery
   */

  export type AggregateLottery = {
    _count: LotteryCountAggregateOutputType | null
    _min: LotteryMinAggregateOutputType | null
    _max: LotteryMaxAggregateOutputType | null
  }

  export type LotteryMinAggregateOutputType = {
    id: string | null
    drawDate: Date | null
    status: string | null
    winnerId: string | null
  }

  export type LotteryMaxAggregateOutputType = {
    id: string | null
    drawDate: Date | null
    status: string | null
    winnerId: string | null
  }

  export type LotteryCountAggregateOutputType = {
    id: number
    drawDate: number
    status: number
    winnerId: number
    _all: number
  }


  export type LotteryMinAggregateInputType = {
    id?: true
    drawDate?: true
    status?: true
    winnerId?: true
  }

  export type LotteryMaxAggregateInputType = {
    id?: true
    drawDate?: true
    status?: true
    winnerId?: true
  }

  export type LotteryCountAggregateInputType = {
    id?: true
    drawDate?: true
    status?: true
    winnerId?: true
    _all?: true
  }

  export type LotteryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lottery to aggregate.
     */
    where?: LotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotteries to fetch.
     */
    orderBy?: LotteryOrderByWithRelationInput | LotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lotteries
    **/
    _count?: true | LotteryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotteryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotteryMaxAggregateInputType
  }

  export type GetLotteryAggregateType<T extends LotteryAggregateArgs> = {
        [P in keyof T & keyof AggregateLottery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLottery[P]>
      : GetScalarType<T[P], AggregateLottery[P]>
  }




  export type LotteryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotteryWhereInput
    orderBy?: LotteryOrderByWithAggregationInput | LotteryOrderByWithAggregationInput[]
    by: LotteryScalarFieldEnum[] | LotteryScalarFieldEnum
    having?: LotteryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotteryCountAggregateInputType | true
    _min?: LotteryMinAggregateInputType
    _max?: LotteryMaxAggregateInputType
  }

  export type LotteryGroupByOutputType = {
    id: string
    drawDate: Date
    status: string
    winnerId: string | null
    _count: LotteryCountAggregateOutputType | null
    _min: LotteryMinAggregateOutputType | null
    _max: LotteryMaxAggregateOutputType | null
  }

  type GetLotteryGroupByPayload<T extends LotteryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotteryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotteryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotteryGroupByOutputType[P]>
            : GetScalarType<T[P], LotteryGroupByOutputType[P]>
        }
      >
    >


  export type LotterySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawDate?: boolean
    status?: boolean
    winnerId?: boolean
    winner?: boolean | Lottery$winnerArgs<ExtArgs>
    lotteryTickets?: boolean | Lottery$lotteryTicketsArgs<ExtArgs>
    _count?: boolean | LotteryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lottery"]>

  export type LotterySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawDate?: boolean
    status?: boolean
    winnerId?: boolean
    winner?: boolean | Lottery$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["lottery"]>

  export type LotterySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawDate?: boolean
    status?: boolean
    winnerId?: boolean
    winner?: boolean | Lottery$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["lottery"]>

  export type LotterySelectScalar = {
    id?: boolean
    drawDate?: boolean
    status?: boolean
    winnerId?: boolean
  }

  export type LotteryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawDate" | "status" | "winnerId", ExtArgs["result"]["lottery"]>
  export type LotteryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Lottery$winnerArgs<ExtArgs>
    lotteryTickets?: boolean | Lottery$lotteryTicketsArgs<ExtArgs>
    _count?: boolean | LotteryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LotteryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Lottery$winnerArgs<ExtArgs>
  }
  export type LotteryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Lottery$winnerArgs<ExtArgs>
  }

  export type $LotteryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lottery"
    objects: {
      winner: Prisma.$UserPayload<ExtArgs> | null
      lotteryTickets: Prisma.$LotteryTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawDate: Date
      status: string
      winnerId: string | null
    }, ExtArgs["result"]["lottery"]>
    composites: {}
  }

  type LotteryGetPayload<S extends boolean | null | undefined | LotteryDefaultArgs> = $Result.GetResult<Prisma.$LotteryPayload, S>

  type LotteryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LotteryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotteryCountAggregateInputType | true
    }

  export interface LotteryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lottery'], meta: { name: 'Lottery' } }
    /**
     * Find zero or one Lottery that matches the filter.
     * @param {LotteryFindUniqueArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LotteryFindUniqueArgs>(args: SelectSubset<T, LotteryFindUniqueArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lottery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LotteryFindUniqueOrThrowArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LotteryFindUniqueOrThrowArgs>(args: SelectSubset<T, LotteryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lottery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryFindFirstArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LotteryFindFirstArgs>(args?: SelectSubset<T, LotteryFindFirstArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lottery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryFindFirstOrThrowArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LotteryFindFirstOrThrowArgs>(args?: SelectSubset<T, LotteryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lotteries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotteries
     * const lotteries = await prisma.lottery.findMany()
     * 
     * // Get first 10 Lotteries
     * const lotteries = await prisma.lottery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotteryWithIdOnly = await prisma.lottery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LotteryFindManyArgs>(args?: SelectSubset<T, LotteryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lottery.
     * @param {LotteryCreateArgs} args - Arguments to create a Lottery.
     * @example
     * // Create one Lottery
     * const Lottery = await prisma.lottery.create({
     *   data: {
     *     // ... data to create a Lottery
     *   }
     * })
     * 
     */
    create<T extends LotteryCreateArgs>(args: SelectSubset<T, LotteryCreateArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lotteries.
     * @param {LotteryCreateManyArgs} args - Arguments to create many Lotteries.
     * @example
     * // Create many Lotteries
     * const lottery = await prisma.lottery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LotteryCreateManyArgs>(args?: SelectSubset<T, LotteryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lotteries and returns the data saved in the database.
     * @param {LotteryCreateManyAndReturnArgs} args - Arguments to create many Lotteries.
     * @example
     * // Create many Lotteries
     * const lottery = await prisma.lottery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lotteries and only return the `id`
     * const lotteryWithIdOnly = await prisma.lottery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LotteryCreateManyAndReturnArgs>(args?: SelectSubset<T, LotteryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lottery.
     * @param {LotteryDeleteArgs} args - Arguments to delete one Lottery.
     * @example
     * // Delete one Lottery
     * const Lottery = await prisma.lottery.delete({
     *   where: {
     *     // ... filter to delete one Lottery
     *   }
     * })
     * 
     */
    delete<T extends LotteryDeleteArgs>(args: SelectSubset<T, LotteryDeleteArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lottery.
     * @param {LotteryUpdateArgs} args - Arguments to update one Lottery.
     * @example
     * // Update one Lottery
     * const lottery = await prisma.lottery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LotteryUpdateArgs>(args: SelectSubset<T, LotteryUpdateArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lotteries.
     * @param {LotteryDeleteManyArgs} args - Arguments to filter Lotteries to delete.
     * @example
     * // Delete a few Lotteries
     * const { count } = await prisma.lottery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LotteryDeleteManyArgs>(args?: SelectSubset<T, LotteryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotteries
     * const lottery = await prisma.lottery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LotteryUpdateManyArgs>(args: SelectSubset<T, LotteryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotteries and returns the data updated in the database.
     * @param {LotteryUpdateManyAndReturnArgs} args - Arguments to update many Lotteries.
     * @example
     * // Update many Lotteries
     * const lottery = await prisma.lottery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lotteries and only return the `id`
     * const lotteryWithIdOnly = await prisma.lottery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LotteryUpdateManyAndReturnArgs>(args: SelectSubset<T, LotteryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lottery.
     * @param {LotteryUpsertArgs} args - Arguments to update or create a Lottery.
     * @example
     * // Update or create a Lottery
     * const lottery = await prisma.lottery.upsert({
     *   create: {
     *     // ... data to create a Lottery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lottery we want to update
     *   }
     * })
     */
    upsert<T extends LotteryUpsertArgs>(args: SelectSubset<T, LotteryUpsertArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lotteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryCountArgs} args - Arguments to filter Lotteries to count.
     * @example
     * // Count the number of Lotteries
     * const count = await prisma.lottery.count({
     *   where: {
     *     // ... the filter for the Lotteries we want to count
     *   }
     * })
    **/
    count<T extends LotteryCountArgs>(
      args?: Subset<T, LotteryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotteryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lottery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LotteryAggregateArgs>(args: Subset<T, LotteryAggregateArgs>): Prisma.PrismaPromise<GetLotteryAggregateType<T>>

    /**
     * Group by Lottery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LotteryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotteryGroupByArgs['orderBy'] }
        : { orderBy?: LotteryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LotteryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotteryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lottery model
   */
  readonly fields: LotteryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lottery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotteryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winner<T extends Lottery$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Lottery$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lotteryTickets<T extends Lottery$lotteryTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Lottery$lotteryTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lottery model
   */
  interface LotteryFieldRefs {
    readonly id: FieldRef<"Lottery", 'String'>
    readonly drawDate: FieldRef<"Lottery", 'DateTime'>
    readonly status: FieldRef<"Lottery", 'String'>
    readonly winnerId: FieldRef<"Lottery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lottery findUnique
   */
  export type LotteryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * Filter, which Lottery to fetch.
     */
    where: LotteryWhereUniqueInput
  }

  /**
   * Lottery findUniqueOrThrow
   */
  export type LotteryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * Filter, which Lottery to fetch.
     */
    where: LotteryWhereUniqueInput
  }

  /**
   * Lottery findFirst
   */
  export type LotteryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * Filter, which Lottery to fetch.
     */
    where?: LotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotteries to fetch.
     */
    orderBy?: LotteryOrderByWithRelationInput | LotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotteries.
     */
    cursor?: LotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotteries.
     */
    distinct?: LotteryScalarFieldEnum | LotteryScalarFieldEnum[]
  }

  /**
   * Lottery findFirstOrThrow
   */
  export type LotteryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * Filter, which Lottery to fetch.
     */
    where?: LotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotteries to fetch.
     */
    orderBy?: LotteryOrderByWithRelationInput | LotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotteries.
     */
    cursor?: LotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotteries.
     */
    distinct?: LotteryScalarFieldEnum | LotteryScalarFieldEnum[]
  }

  /**
   * Lottery findMany
   */
  export type LotteryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * Filter, which Lotteries to fetch.
     */
    where?: LotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotteries to fetch.
     */
    orderBy?: LotteryOrderByWithRelationInput | LotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lotteries.
     */
    cursor?: LotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotteries.
     */
    skip?: number
    distinct?: LotteryScalarFieldEnum | LotteryScalarFieldEnum[]
  }

  /**
   * Lottery create
   */
  export type LotteryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * The data needed to create a Lottery.
     */
    data: XOR<LotteryCreateInput, LotteryUncheckedCreateInput>
  }

  /**
   * Lottery createMany
   */
  export type LotteryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lotteries.
     */
    data: LotteryCreateManyInput | LotteryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lottery createManyAndReturn
   */
  export type LotteryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * The data used to create many Lotteries.
     */
    data: LotteryCreateManyInput | LotteryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lottery update
   */
  export type LotteryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * The data needed to update a Lottery.
     */
    data: XOR<LotteryUpdateInput, LotteryUncheckedUpdateInput>
    /**
     * Choose, which Lottery to update.
     */
    where: LotteryWhereUniqueInput
  }

  /**
   * Lottery updateMany
   */
  export type LotteryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lotteries.
     */
    data: XOR<LotteryUpdateManyMutationInput, LotteryUncheckedUpdateManyInput>
    /**
     * Filter which Lotteries to update
     */
    where?: LotteryWhereInput
    /**
     * Limit how many Lotteries to update.
     */
    limit?: number
  }

  /**
   * Lottery updateManyAndReturn
   */
  export type LotteryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * The data used to update Lotteries.
     */
    data: XOR<LotteryUpdateManyMutationInput, LotteryUncheckedUpdateManyInput>
    /**
     * Filter which Lotteries to update
     */
    where?: LotteryWhereInput
    /**
     * Limit how many Lotteries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lottery upsert
   */
  export type LotteryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * The filter to search for the Lottery to update in case it exists.
     */
    where: LotteryWhereUniqueInput
    /**
     * In case the Lottery found by the `where` argument doesn't exist, create a new Lottery with this data.
     */
    create: XOR<LotteryCreateInput, LotteryUncheckedCreateInput>
    /**
     * In case the Lottery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotteryUpdateInput, LotteryUncheckedUpdateInput>
  }

  /**
   * Lottery delete
   */
  export type LotteryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
    /**
     * Filter which Lottery to delete.
     */
    where: LotteryWhereUniqueInput
  }

  /**
   * Lottery deleteMany
   */
  export type LotteryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lotteries to delete
     */
    where?: LotteryWhereInput
    /**
     * Limit how many Lotteries to delete.
     */
    limit?: number
  }

  /**
   * Lottery.winner
   */
  export type Lottery$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lottery.lotteryTickets
   */
  export type Lottery$lotteryTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    where?: LotteryTicketWhereInput
    orderBy?: LotteryTicketOrderByWithRelationInput | LotteryTicketOrderByWithRelationInput[]
    cursor?: LotteryTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotteryTicketScalarFieldEnum | LotteryTicketScalarFieldEnum[]
  }

  /**
   * Lottery without action
   */
  export type LotteryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lottery
     */
    select?: LotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lottery
     */
    omit?: LotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryInclude<ExtArgs> | null
  }


  /**
   * Model LotteryTicket
   */

  export type AggregateLotteryTicket = {
    _count: LotteryTicketCountAggregateOutputType | null
    _min: LotteryTicketMinAggregateOutputType | null
    _max: LotteryTicketMaxAggregateOutputType | null
  }

  export type LotteryTicketMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lotteryId: string | null
    recyclingEntryId: string | null
    createdAt: Date | null
  }

  export type LotteryTicketMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lotteryId: string | null
    recyclingEntryId: string | null
    createdAt: Date | null
  }

  export type LotteryTicketCountAggregateOutputType = {
    id: number
    userId: number
    lotteryId: number
    recyclingEntryId: number
    createdAt: number
    _all: number
  }


  export type LotteryTicketMinAggregateInputType = {
    id?: true
    userId?: true
    lotteryId?: true
    recyclingEntryId?: true
    createdAt?: true
  }

  export type LotteryTicketMaxAggregateInputType = {
    id?: true
    userId?: true
    lotteryId?: true
    recyclingEntryId?: true
    createdAt?: true
  }

  export type LotteryTicketCountAggregateInputType = {
    id?: true
    userId?: true
    lotteryId?: true
    recyclingEntryId?: true
    createdAt?: true
    _all?: true
  }

  export type LotteryTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LotteryTicket to aggregate.
     */
    where?: LotteryTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryTickets to fetch.
     */
    orderBy?: LotteryTicketOrderByWithRelationInput | LotteryTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotteryTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LotteryTickets
    **/
    _count?: true | LotteryTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotteryTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotteryTicketMaxAggregateInputType
  }

  export type GetLotteryTicketAggregateType<T extends LotteryTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateLotteryTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLotteryTicket[P]>
      : GetScalarType<T[P], AggregateLotteryTicket[P]>
  }




  export type LotteryTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotteryTicketWhereInput
    orderBy?: LotteryTicketOrderByWithAggregationInput | LotteryTicketOrderByWithAggregationInput[]
    by: LotteryTicketScalarFieldEnum[] | LotteryTicketScalarFieldEnum
    having?: LotteryTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotteryTicketCountAggregateInputType | true
    _min?: LotteryTicketMinAggregateInputType
    _max?: LotteryTicketMaxAggregateInputType
  }

  export type LotteryTicketGroupByOutputType = {
    id: string
    userId: string
    lotteryId: string
    recyclingEntryId: string
    createdAt: Date
    _count: LotteryTicketCountAggregateOutputType | null
    _min: LotteryTicketMinAggregateOutputType | null
    _max: LotteryTicketMaxAggregateOutputType | null
  }

  type GetLotteryTicketGroupByPayload<T extends LotteryTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotteryTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotteryTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotteryTicketGroupByOutputType[P]>
            : GetScalarType<T[P], LotteryTicketGroupByOutputType[P]>
        }
      >
    >


  export type LotteryTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lotteryId?: boolean
    recyclingEntryId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lottery?: boolean | LotteryDefaultArgs<ExtArgs>
    recyclingEntry?: boolean | RecyclingEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lotteryTicket"]>

  export type LotteryTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lotteryId?: boolean
    recyclingEntryId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lottery?: boolean | LotteryDefaultArgs<ExtArgs>
    recyclingEntry?: boolean | RecyclingEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lotteryTicket"]>

  export type LotteryTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lotteryId?: boolean
    recyclingEntryId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lottery?: boolean | LotteryDefaultArgs<ExtArgs>
    recyclingEntry?: boolean | RecyclingEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lotteryTicket"]>

  export type LotteryTicketSelectScalar = {
    id?: boolean
    userId?: boolean
    lotteryId?: boolean
    recyclingEntryId?: boolean
    createdAt?: boolean
  }

  export type LotteryTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lotteryId" | "recyclingEntryId" | "createdAt", ExtArgs["result"]["lotteryTicket"]>
  export type LotteryTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lottery?: boolean | LotteryDefaultArgs<ExtArgs>
    recyclingEntry?: boolean | RecyclingEntryDefaultArgs<ExtArgs>
  }
  export type LotteryTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lottery?: boolean | LotteryDefaultArgs<ExtArgs>
    recyclingEntry?: boolean | RecyclingEntryDefaultArgs<ExtArgs>
  }
  export type LotteryTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lottery?: boolean | LotteryDefaultArgs<ExtArgs>
    recyclingEntry?: boolean | RecyclingEntryDefaultArgs<ExtArgs>
  }

  export type $LotteryTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LotteryTicket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lottery: Prisma.$LotteryPayload<ExtArgs>
      recyclingEntry: Prisma.$RecyclingEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lotteryId: string
      recyclingEntryId: string
      createdAt: Date
    }, ExtArgs["result"]["lotteryTicket"]>
    composites: {}
  }

  type LotteryTicketGetPayload<S extends boolean | null | undefined | LotteryTicketDefaultArgs> = $Result.GetResult<Prisma.$LotteryTicketPayload, S>

  type LotteryTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LotteryTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotteryTicketCountAggregateInputType | true
    }

  export interface LotteryTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LotteryTicket'], meta: { name: 'LotteryTicket' } }
    /**
     * Find zero or one LotteryTicket that matches the filter.
     * @param {LotteryTicketFindUniqueArgs} args - Arguments to find a LotteryTicket
     * @example
     * // Get one LotteryTicket
     * const lotteryTicket = await prisma.lotteryTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LotteryTicketFindUniqueArgs>(args: SelectSubset<T, LotteryTicketFindUniqueArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LotteryTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LotteryTicketFindUniqueOrThrowArgs} args - Arguments to find a LotteryTicket
     * @example
     * // Get one LotteryTicket
     * const lotteryTicket = await prisma.lotteryTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LotteryTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, LotteryTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LotteryTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryTicketFindFirstArgs} args - Arguments to find a LotteryTicket
     * @example
     * // Get one LotteryTicket
     * const lotteryTicket = await prisma.lotteryTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LotteryTicketFindFirstArgs>(args?: SelectSubset<T, LotteryTicketFindFirstArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LotteryTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryTicketFindFirstOrThrowArgs} args - Arguments to find a LotteryTicket
     * @example
     * // Get one LotteryTicket
     * const lotteryTicket = await prisma.lotteryTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LotteryTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, LotteryTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LotteryTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LotteryTickets
     * const lotteryTickets = await prisma.lotteryTicket.findMany()
     * 
     * // Get first 10 LotteryTickets
     * const lotteryTickets = await prisma.lotteryTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotteryTicketWithIdOnly = await prisma.lotteryTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LotteryTicketFindManyArgs>(args?: SelectSubset<T, LotteryTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LotteryTicket.
     * @param {LotteryTicketCreateArgs} args - Arguments to create a LotteryTicket.
     * @example
     * // Create one LotteryTicket
     * const LotteryTicket = await prisma.lotteryTicket.create({
     *   data: {
     *     // ... data to create a LotteryTicket
     *   }
     * })
     * 
     */
    create<T extends LotteryTicketCreateArgs>(args: SelectSubset<T, LotteryTicketCreateArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LotteryTickets.
     * @param {LotteryTicketCreateManyArgs} args - Arguments to create many LotteryTickets.
     * @example
     * // Create many LotteryTickets
     * const lotteryTicket = await prisma.lotteryTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LotteryTicketCreateManyArgs>(args?: SelectSubset<T, LotteryTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LotteryTickets and returns the data saved in the database.
     * @param {LotteryTicketCreateManyAndReturnArgs} args - Arguments to create many LotteryTickets.
     * @example
     * // Create many LotteryTickets
     * const lotteryTicket = await prisma.lotteryTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LotteryTickets and only return the `id`
     * const lotteryTicketWithIdOnly = await prisma.lotteryTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LotteryTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, LotteryTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LotteryTicket.
     * @param {LotteryTicketDeleteArgs} args - Arguments to delete one LotteryTicket.
     * @example
     * // Delete one LotteryTicket
     * const LotteryTicket = await prisma.lotteryTicket.delete({
     *   where: {
     *     // ... filter to delete one LotteryTicket
     *   }
     * })
     * 
     */
    delete<T extends LotteryTicketDeleteArgs>(args: SelectSubset<T, LotteryTicketDeleteArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LotteryTicket.
     * @param {LotteryTicketUpdateArgs} args - Arguments to update one LotteryTicket.
     * @example
     * // Update one LotteryTicket
     * const lotteryTicket = await prisma.lotteryTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LotteryTicketUpdateArgs>(args: SelectSubset<T, LotteryTicketUpdateArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LotteryTickets.
     * @param {LotteryTicketDeleteManyArgs} args - Arguments to filter LotteryTickets to delete.
     * @example
     * // Delete a few LotteryTickets
     * const { count } = await prisma.lotteryTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LotteryTicketDeleteManyArgs>(args?: SelectSubset<T, LotteryTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LotteryTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LotteryTickets
     * const lotteryTicket = await prisma.lotteryTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LotteryTicketUpdateManyArgs>(args: SelectSubset<T, LotteryTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LotteryTickets and returns the data updated in the database.
     * @param {LotteryTicketUpdateManyAndReturnArgs} args - Arguments to update many LotteryTickets.
     * @example
     * // Update many LotteryTickets
     * const lotteryTicket = await prisma.lotteryTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LotteryTickets and only return the `id`
     * const lotteryTicketWithIdOnly = await prisma.lotteryTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LotteryTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, LotteryTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LotteryTicket.
     * @param {LotteryTicketUpsertArgs} args - Arguments to update or create a LotteryTicket.
     * @example
     * // Update or create a LotteryTicket
     * const lotteryTicket = await prisma.lotteryTicket.upsert({
     *   create: {
     *     // ... data to create a LotteryTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LotteryTicket we want to update
     *   }
     * })
     */
    upsert<T extends LotteryTicketUpsertArgs>(args: SelectSubset<T, LotteryTicketUpsertArgs<ExtArgs>>): Prisma__LotteryTicketClient<$Result.GetResult<Prisma.$LotteryTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LotteryTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryTicketCountArgs} args - Arguments to filter LotteryTickets to count.
     * @example
     * // Count the number of LotteryTickets
     * const count = await prisma.lotteryTicket.count({
     *   where: {
     *     // ... the filter for the LotteryTickets we want to count
     *   }
     * })
    **/
    count<T extends LotteryTicketCountArgs>(
      args?: Subset<T, LotteryTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotteryTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LotteryTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LotteryTicketAggregateArgs>(args: Subset<T, LotteryTicketAggregateArgs>): Prisma.PrismaPromise<GetLotteryTicketAggregateType<T>>

    /**
     * Group by LotteryTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LotteryTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotteryTicketGroupByArgs['orderBy'] }
        : { orderBy?: LotteryTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LotteryTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotteryTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LotteryTicket model
   */
  readonly fields: LotteryTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LotteryTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotteryTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lottery<T extends LotteryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotteryDefaultArgs<ExtArgs>>): Prisma__LotteryClient<$Result.GetResult<Prisma.$LotteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recyclingEntry<T extends RecyclingEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecyclingEntryDefaultArgs<ExtArgs>>): Prisma__RecyclingEntryClient<$Result.GetResult<Prisma.$RecyclingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LotteryTicket model
   */
  interface LotteryTicketFieldRefs {
    readonly id: FieldRef<"LotteryTicket", 'String'>
    readonly userId: FieldRef<"LotteryTicket", 'String'>
    readonly lotteryId: FieldRef<"LotteryTicket", 'String'>
    readonly recyclingEntryId: FieldRef<"LotteryTicket", 'String'>
    readonly createdAt: FieldRef<"LotteryTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LotteryTicket findUnique
   */
  export type LotteryTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * Filter, which LotteryTicket to fetch.
     */
    where: LotteryTicketWhereUniqueInput
  }

  /**
   * LotteryTicket findUniqueOrThrow
   */
  export type LotteryTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * Filter, which LotteryTicket to fetch.
     */
    where: LotteryTicketWhereUniqueInput
  }

  /**
   * LotteryTicket findFirst
   */
  export type LotteryTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * Filter, which LotteryTicket to fetch.
     */
    where?: LotteryTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryTickets to fetch.
     */
    orderBy?: LotteryTicketOrderByWithRelationInput | LotteryTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LotteryTickets.
     */
    cursor?: LotteryTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LotteryTickets.
     */
    distinct?: LotteryTicketScalarFieldEnum | LotteryTicketScalarFieldEnum[]
  }

  /**
   * LotteryTicket findFirstOrThrow
   */
  export type LotteryTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * Filter, which LotteryTicket to fetch.
     */
    where?: LotteryTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryTickets to fetch.
     */
    orderBy?: LotteryTicketOrderByWithRelationInput | LotteryTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LotteryTickets.
     */
    cursor?: LotteryTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LotteryTickets.
     */
    distinct?: LotteryTicketScalarFieldEnum | LotteryTicketScalarFieldEnum[]
  }

  /**
   * LotteryTicket findMany
   */
  export type LotteryTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * Filter, which LotteryTickets to fetch.
     */
    where?: LotteryTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryTickets to fetch.
     */
    orderBy?: LotteryTicketOrderByWithRelationInput | LotteryTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LotteryTickets.
     */
    cursor?: LotteryTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryTickets.
     */
    skip?: number
    distinct?: LotteryTicketScalarFieldEnum | LotteryTicketScalarFieldEnum[]
  }

  /**
   * LotteryTicket create
   */
  export type LotteryTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a LotteryTicket.
     */
    data: XOR<LotteryTicketCreateInput, LotteryTicketUncheckedCreateInput>
  }

  /**
   * LotteryTicket createMany
   */
  export type LotteryTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LotteryTickets.
     */
    data: LotteryTicketCreateManyInput | LotteryTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LotteryTicket createManyAndReturn
   */
  export type LotteryTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * The data used to create many LotteryTickets.
     */
    data: LotteryTicketCreateManyInput | LotteryTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LotteryTicket update
   */
  export type LotteryTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a LotteryTicket.
     */
    data: XOR<LotteryTicketUpdateInput, LotteryTicketUncheckedUpdateInput>
    /**
     * Choose, which LotteryTicket to update.
     */
    where: LotteryTicketWhereUniqueInput
  }

  /**
   * LotteryTicket updateMany
   */
  export type LotteryTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LotteryTickets.
     */
    data: XOR<LotteryTicketUpdateManyMutationInput, LotteryTicketUncheckedUpdateManyInput>
    /**
     * Filter which LotteryTickets to update
     */
    where?: LotteryTicketWhereInput
    /**
     * Limit how many LotteryTickets to update.
     */
    limit?: number
  }

  /**
   * LotteryTicket updateManyAndReturn
   */
  export type LotteryTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * The data used to update LotteryTickets.
     */
    data: XOR<LotteryTicketUpdateManyMutationInput, LotteryTicketUncheckedUpdateManyInput>
    /**
     * Filter which LotteryTickets to update
     */
    where?: LotteryTicketWhereInput
    /**
     * Limit how many LotteryTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LotteryTicket upsert
   */
  export type LotteryTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the LotteryTicket to update in case it exists.
     */
    where: LotteryTicketWhereUniqueInput
    /**
     * In case the LotteryTicket found by the `where` argument doesn't exist, create a new LotteryTicket with this data.
     */
    create: XOR<LotteryTicketCreateInput, LotteryTicketUncheckedCreateInput>
    /**
     * In case the LotteryTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotteryTicketUpdateInput, LotteryTicketUncheckedUpdateInput>
  }

  /**
   * LotteryTicket delete
   */
  export type LotteryTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
    /**
     * Filter which LotteryTicket to delete.
     */
    where: LotteryTicketWhereUniqueInput
  }

  /**
   * LotteryTicket deleteMany
   */
  export type LotteryTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LotteryTickets to delete
     */
    where?: LotteryTicketWhereInput
    /**
     * Limit how many LotteryTickets to delete.
     */
    limit?: number
  }

  /**
   * LotteryTicket without action
   */
  export type LotteryTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryTicket
     */
    select?: LotteryTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryTicket
     */
    omit?: LotteryTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryTicketInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    barcode: 'barcode'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecyclingContainerScalarFieldEnum: {
    id: 'id',
    location: 'location',
    area: 'area',
    capacity: 'capacity',
    currentFillLevel: 'currentFillLevel',
    lastEmptied: 'lastEmptied'
  };

  export type RecyclingContainerScalarFieldEnum = (typeof RecyclingContainerScalarFieldEnum)[keyof typeof RecyclingContainerScalarFieldEnum]


  export const RecyclingEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    containerId: 'containerId',
    itemCount: 'itemCount',
    timestamp: 'timestamp',
    itemType: 'itemType'
  };

  export type RecyclingEntryScalarFieldEnum = (typeof RecyclingEntryScalarFieldEnum)[keyof typeof RecyclingEntryScalarFieldEnum]


  export const LotteryScalarFieldEnum: {
    id: 'id',
    drawDate: 'drawDate',
    status: 'status',
    winnerId: 'winnerId'
  };

  export type LotteryScalarFieldEnum = (typeof LotteryScalarFieldEnum)[keyof typeof LotteryScalarFieldEnum]


  export const LotteryTicketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lotteryId: 'lotteryId',
    recyclingEntryId: 'recyclingEntryId',
    createdAt: 'createdAt'
  };

  export type LotteryTicketScalarFieldEnum = (typeof LotteryTicketScalarFieldEnum)[keyof typeof LotteryTicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    barcode?: StringFilter<"User"> | string
    recyclingEntries?: RecyclingEntryListRelationFilter
    lotteryTickets?: LotteryTicketListRelationFilter
    wonLotteries?: LotteryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barcode?: SortOrder
    recyclingEntries?: RecyclingEntryOrderByRelationAggregateInput
    lotteryTickets?: LotteryTicketOrderByRelationAggregateInput
    wonLotteries?: LotteryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    barcode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recyclingEntries?: RecyclingEntryListRelationFilter
    lotteryTickets?: LotteryTicketListRelationFilter
    wonLotteries?: LotteryListRelationFilter
  }, "id" | "email" | "barcode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barcode?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    barcode?: StringWithAggregatesFilter<"User"> | string
  }

  export type RecyclingContainerWhereInput = {
    AND?: RecyclingContainerWhereInput | RecyclingContainerWhereInput[]
    OR?: RecyclingContainerWhereInput[]
    NOT?: RecyclingContainerWhereInput | RecyclingContainerWhereInput[]
    id?: StringFilter<"RecyclingContainer"> | string
    location?: StringFilter<"RecyclingContainer"> | string
    area?: StringFilter<"RecyclingContainer"> | string
    capacity?: IntFilter<"RecyclingContainer"> | number
    currentFillLevel?: IntFilter<"RecyclingContainer"> | number
    lastEmptied?: DateTimeNullableFilter<"RecyclingContainer"> | Date | string | null
    recyclingEntries?: RecyclingEntryListRelationFilter
  }

  export type RecyclingContainerOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    area?: SortOrder
    capacity?: SortOrder
    currentFillLevel?: SortOrder
    lastEmptied?: SortOrderInput | SortOrder
    recyclingEntries?: RecyclingEntryOrderByRelationAggregateInput
  }

  export type RecyclingContainerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecyclingContainerWhereInput | RecyclingContainerWhereInput[]
    OR?: RecyclingContainerWhereInput[]
    NOT?: RecyclingContainerWhereInput | RecyclingContainerWhereInput[]
    location?: StringFilter<"RecyclingContainer"> | string
    area?: StringFilter<"RecyclingContainer"> | string
    capacity?: IntFilter<"RecyclingContainer"> | number
    currentFillLevel?: IntFilter<"RecyclingContainer"> | number
    lastEmptied?: DateTimeNullableFilter<"RecyclingContainer"> | Date | string | null
    recyclingEntries?: RecyclingEntryListRelationFilter
  }, "id">

  export type RecyclingContainerOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    area?: SortOrder
    capacity?: SortOrder
    currentFillLevel?: SortOrder
    lastEmptied?: SortOrderInput | SortOrder
    _count?: RecyclingContainerCountOrderByAggregateInput
    _avg?: RecyclingContainerAvgOrderByAggregateInput
    _max?: RecyclingContainerMaxOrderByAggregateInput
    _min?: RecyclingContainerMinOrderByAggregateInput
    _sum?: RecyclingContainerSumOrderByAggregateInput
  }

  export type RecyclingContainerScalarWhereWithAggregatesInput = {
    AND?: RecyclingContainerScalarWhereWithAggregatesInput | RecyclingContainerScalarWhereWithAggregatesInput[]
    OR?: RecyclingContainerScalarWhereWithAggregatesInput[]
    NOT?: RecyclingContainerScalarWhereWithAggregatesInput | RecyclingContainerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecyclingContainer"> | string
    location?: StringWithAggregatesFilter<"RecyclingContainer"> | string
    area?: StringWithAggregatesFilter<"RecyclingContainer"> | string
    capacity?: IntWithAggregatesFilter<"RecyclingContainer"> | number
    currentFillLevel?: IntWithAggregatesFilter<"RecyclingContainer"> | number
    lastEmptied?: DateTimeNullableWithAggregatesFilter<"RecyclingContainer"> | Date | string | null
  }

  export type RecyclingEntryWhereInput = {
    AND?: RecyclingEntryWhereInput | RecyclingEntryWhereInput[]
    OR?: RecyclingEntryWhereInput[]
    NOT?: RecyclingEntryWhereInput | RecyclingEntryWhereInput[]
    id?: StringFilter<"RecyclingEntry"> | string
    userId?: StringFilter<"RecyclingEntry"> | string
    containerId?: StringFilter<"RecyclingEntry"> | string
    itemCount?: IntFilter<"RecyclingEntry"> | number
    timestamp?: DateTimeFilter<"RecyclingEntry"> | Date | string
    itemType?: StringFilter<"RecyclingEntry"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    container?: XOR<RecyclingContainerScalarRelationFilter, RecyclingContainerWhereInput>
    lotteryTickets?: LotteryTicketListRelationFilter
  }

  export type RecyclingEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    itemCount?: SortOrder
    timestamp?: SortOrder
    itemType?: SortOrder
    user?: UserOrderByWithRelationInput
    container?: RecyclingContainerOrderByWithRelationInput
    lotteryTickets?: LotteryTicketOrderByRelationAggregateInput
  }

  export type RecyclingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecyclingEntryWhereInput | RecyclingEntryWhereInput[]
    OR?: RecyclingEntryWhereInput[]
    NOT?: RecyclingEntryWhereInput | RecyclingEntryWhereInput[]
    userId?: StringFilter<"RecyclingEntry"> | string
    containerId?: StringFilter<"RecyclingEntry"> | string
    itemCount?: IntFilter<"RecyclingEntry"> | number
    timestamp?: DateTimeFilter<"RecyclingEntry"> | Date | string
    itemType?: StringFilter<"RecyclingEntry"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    container?: XOR<RecyclingContainerScalarRelationFilter, RecyclingContainerWhereInput>
    lotteryTickets?: LotteryTicketListRelationFilter
  }, "id">

  export type RecyclingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    itemCount?: SortOrder
    timestamp?: SortOrder
    itemType?: SortOrder
    _count?: RecyclingEntryCountOrderByAggregateInput
    _avg?: RecyclingEntryAvgOrderByAggregateInput
    _max?: RecyclingEntryMaxOrderByAggregateInput
    _min?: RecyclingEntryMinOrderByAggregateInput
    _sum?: RecyclingEntrySumOrderByAggregateInput
  }

  export type RecyclingEntryScalarWhereWithAggregatesInput = {
    AND?: RecyclingEntryScalarWhereWithAggregatesInput | RecyclingEntryScalarWhereWithAggregatesInput[]
    OR?: RecyclingEntryScalarWhereWithAggregatesInput[]
    NOT?: RecyclingEntryScalarWhereWithAggregatesInput | RecyclingEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecyclingEntry"> | string
    userId?: StringWithAggregatesFilter<"RecyclingEntry"> | string
    containerId?: StringWithAggregatesFilter<"RecyclingEntry"> | string
    itemCount?: IntWithAggregatesFilter<"RecyclingEntry"> | number
    timestamp?: DateTimeWithAggregatesFilter<"RecyclingEntry"> | Date | string
    itemType?: StringWithAggregatesFilter<"RecyclingEntry"> | string
  }

  export type LotteryWhereInput = {
    AND?: LotteryWhereInput | LotteryWhereInput[]
    OR?: LotteryWhereInput[]
    NOT?: LotteryWhereInput | LotteryWhereInput[]
    id?: StringFilter<"Lottery"> | string
    drawDate?: DateTimeFilter<"Lottery"> | Date | string
    status?: StringFilter<"Lottery"> | string
    winnerId?: StringNullableFilter<"Lottery"> | string | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    lotteryTickets?: LotteryTicketListRelationFilter
  }

  export type LotteryOrderByWithRelationInput = {
    id?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    winner?: UserOrderByWithRelationInput
    lotteryTickets?: LotteryTicketOrderByRelationAggregateInput
  }

  export type LotteryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LotteryWhereInput | LotteryWhereInput[]
    OR?: LotteryWhereInput[]
    NOT?: LotteryWhereInput | LotteryWhereInput[]
    drawDate?: DateTimeFilter<"Lottery"> | Date | string
    status?: StringFilter<"Lottery"> | string
    winnerId?: StringNullableFilter<"Lottery"> | string | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    lotteryTickets?: LotteryTicketListRelationFilter
  }, "id">

  export type LotteryOrderByWithAggregationInput = {
    id?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    _count?: LotteryCountOrderByAggregateInput
    _max?: LotteryMaxOrderByAggregateInput
    _min?: LotteryMinOrderByAggregateInput
  }

  export type LotteryScalarWhereWithAggregatesInput = {
    AND?: LotteryScalarWhereWithAggregatesInput | LotteryScalarWhereWithAggregatesInput[]
    OR?: LotteryScalarWhereWithAggregatesInput[]
    NOT?: LotteryScalarWhereWithAggregatesInput | LotteryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lottery"> | string
    drawDate?: DateTimeWithAggregatesFilter<"Lottery"> | Date | string
    status?: StringWithAggregatesFilter<"Lottery"> | string
    winnerId?: StringNullableWithAggregatesFilter<"Lottery"> | string | null
  }

  export type LotteryTicketWhereInput = {
    AND?: LotteryTicketWhereInput | LotteryTicketWhereInput[]
    OR?: LotteryTicketWhereInput[]
    NOT?: LotteryTicketWhereInput | LotteryTicketWhereInput[]
    id?: StringFilter<"LotteryTicket"> | string
    userId?: StringFilter<"LotteryTicket"> | string
    lotteryId?: StringFilter<"LotteryTicket"> | string
    recyclingEntryId?: StringFilter<"LotteryTicket"> | string
    createdAt?: DateTimeFilter<"LotteryTicket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lottery?: XOR<LotteryScalarRelationFilter, LotteryWhereInput>
    recyclingEntry?: XOR<RecyclingEntryScalarRelationFilter, RecyclingEntryWhereInput>
  }

  export type LotteryTicketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lotteryId?: SortOrder
    recyclingEntryId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lottery?: LotteryOrderByWithRelationInput
    recyclingEntry?: RecyclingEntryOrderByWithRelationInput
  }

  export type LotteryTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LotteryTicketWhereInput | LotteryTicketWhereInput[]
    OR?: LotteryTicketWhereInput[]
    NOT?: LotteryTicketWhereInput | LotteryTicketWhereInput[]
    userId?: StringFilter<"LotteryTicket"> | string
    lotteryId?: StringFilter<"LotteryTicket"> | string
    recyclingEntryId?: StringFilter<"LotteryTicket"> | string
    createdAt?: DateTimeFilter<"LotteryTicket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lottery?: XOR<LotteryScalarRelationFilter, LotteryWhereInput>
    recyclingEntry?: XOR<RecyclingEntryScalarRelationFilter, RecyclingEntryWhereInput>
  }, "id">

  export type LotteryTicketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lotteryId?: SortOrder
    recyclingEntryId?: SortOrder
    createdAt?: SortOrder
    _count?: LotteryTicketCountOrderByAggregateInput
    _max?: LotteryTicketMaxOrderByAggregateInput
    _min?: LotteryTicketMinOrderByAggregateInput
  }

  export type LotteryTicketScalarWhereWithAggregatesInput = {
    AND?: LotteryTicketScalarWhereWithAggregatesInput | LotteryTicketScalarWhereWithAggregatesInput[]
    OR?: LotteryTicketScalarWhereWithAggregatesInput[]
    NOT?: LotteryTicketScalarWhereWithAggregatesInput | LotteryTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LotteryTicket"> | string
    userId?: StringWithAggregatesFilter<"LotteryTicket"> | string
    lotteryId?: StringWithAggregatesFilter<"LotteryTicket"> | string
    recyclingEntryId?: StringWithAggregatesFilter<"LotteryTicket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LotteryTicket"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    recyclingEntries?: RecyclingEntryCreateNestedManyWithoutUserInput
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutUserInput
    wonLotteries?: LotteryCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    recyclingEntries?: RecyclingEntryUncheckedCreateNestedManyWithoutUserInput
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutUserInput
    wonLotteries?: LotteryUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    recyclingEntries?: RecyclingEntryUpdateManyWithoutUserNestedInput
    lotteryTickets?: LotteryTicketUpdateManyWithoutUserNestedInput
    wonLotteries?: LotteryUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    recyclingEntries?: RecyclingEntryUncheckedUpdateManyWithoutUserNestedInput
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutUserNestedInput
    wonLotteries?: LotteryUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
  }

  export type RecyclingContainerCreateInput = {
    id?: string
    location: string
    area: string
    capacity: number
    currentFillLevel?: number
    lastEmptied?: Date | string | null
    recyclingEntries?: RecyclingEntryCreateNestedManyWithoutContainerInput
  }

  export type RecyclingContainerUncheckedCreateInput = {
    id?: string
    location: string
    area: string
    capacity: number
    currentFillLevel?: number
    lastEmptied?: Date | string | null
    recyclingEntries?: RecyclingEntryUncheckedCreateNestedManyWithoutContainerInput
  }

  export type RecyclingContainerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentFillLevel?: IntFieldUpdateOperationsInput | number
    lastEmptied?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recyclingEntries?: RecyclingEntryUpdateManyWithoutContainerNestedInput
  }

  export type RecyclingContainerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentFillLevel?: IntFieldUpdateOperationsInput | number
    lastEmptied?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recyclingEntries?: RecyclingEntryUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type RecyclingContainerCreateManyInput = {
    id?: string
    location: string
    area: string
    capacity: number
    currentFillLevel?: number
    lastEmptied?: Date | string | null
  }

  export type RecyclingContainerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentFillLevel?: IntFieldUpdateOperationsInput | number
    lastEmptied?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecyclingContainerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentFillLevel?: IntFieldUpdateOperationsInput | number
    lastEmptied?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecyclingEntryCreateInput = {
    id?: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
    user: UserCreateNestedOneWithoutRecyclingEntriesInput
    container: RecyclingContainerCreateNestedOneWithoutRecyclingEntriesInput
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutRecyclingEntryInput
  }

  export type RecyclingEntryUncheckedCreateInput = {
    id?: string
    userId: string
    containerId: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutRecyclingEntryInput
  }

  export type RecyclingEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRecyclingEntriesNestedInput
    container?: RecyclingContainerUpdateOneRequiredWithoutRecyclingEntriesNestedInput
    lotteryTickets?: LotteryTicketUpdateManyWithoutRecyclingEntryNestedInput
  }

  export type RecyclingEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutRecyclingEntryNestedInput
  }

  export type RecyclingEntryCreateManyInput = {
    id?: string
    userId: string
    containerId: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
  }

  export type RecyclingEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
  }

  export type RecyclingEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
  }

  export type LotteryCreateInput = {
    id?: string
    drawDate: Date | string
    status: string
    winner?: UserCreateNestedOneWithoutWonLotteriesInput
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutLotteryInput
  }

  export type LotteryUncheckedCreateInput = {
    id?: string
    drawDate: Date | string
    status: string
    winnerId?: string | null
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutLotteryInput
  }

  export type LotteryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    winner?: UserUpdateOneWithoutWonLotteriesNestedInput
    lotteryTickets?: LotteryTicketUpdateManyWithoutLotteryNestedInput
  }

  export type LotteryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutLotteryNestedInput
  }

  export type LotteryCreateManyInput = {
    id?: string
    drawDate: Date | string
    status: string
    winnerId?: string | null
  }

  export type LotteryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LotteryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LotteryTicketCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLotteryTicketsInput
    lottery: LotteryCreateNestedOneWithoutLotteryTicketsInput
    recyclingEntry: RecyclingEntryCreateNestedOneWithoutLotteryTicketsInput
  }

  export type LotteryTicketUncheckedCreateInput = {
    id?: string
    userId: string
    lotteryId: string
    recyclingEntryId: string
    createdAt?: Date | string
  }

  export type LotteryTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLotteryTicketsNestedInput
    lottery?: LotteryUpdateOneRequiredWithoutLotteryTicketsNestedInput
    recyclingEntry?: RecyclingEntryUpdateOneRequiredWithoutLotteryTicketsNestedInput
  }

  export type LotteryTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lotteryId?: StringFieldUpdateOperationsInput | string
    recyclingEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryTicketCreateManyInput = {
    id?: string
    userId: string
    lotteryId: string
    recyclingEntryId: string
    createdAt?: Date | string
  }

  export type LotteryTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lotteryId?: StringFieldUpdateOperationsInput | string
    recyclingEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecyclingEntryListRelationFilter = {
    every?: RecyclingEntryWhereInput
    some?: RecyclingEntryWhereInput
    none?: RecyclingEntryWhereInput
  }

  export type LotteryTicketListRelationFilter = {
    every?: LotteryTicketWhereInput
    some?: LotteryTicketWhereInput
    none?: LotteryTicketWhereInput
  }

  export type LotteryListRelationFilter = {
    every?: LotteryWhereInput
    some?: LotteryWhereInput
    none?: LotteryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecyclingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LotteryTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LotteryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barcode?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barcode?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barcode?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RecyclingContainerCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    area?: SortOrder
    capacity?: SortOrder
    currentFillLevel?: SortOrder
    lastEmptied?: SortOrder
  }

  export type RecyclingContainerAvgOrderByAggregateInput = {
    capacity?: SortOrder
    currentFillLevel?: SortOrder
  }

  export type RecyclingContainerMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    area?: SortOrder
    capacity?: SortOrder
    currentFillLevel?: SortOrder
    lastEmptied?: SortOrder
  }

  export type RecyclingContainerMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    area?: SortOrder
    capacity?: SortOrder
    currentFillLevel?: SortOrder
    lastEmptied?: SortOrder
  }

  export type RecyclingContainerSumOrderByAggregateInput = {
    capacity?: SortOrder
    currentFillLevel?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecyclingContainerScalarRelationFilter = {
    is?: RecyclingContainerWhereInput
    isNot?: RecyclingContainerWhereInput
  }

  export type RecyclingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    itemCount?: SortOrder
    timestamp?: SortOrder
    itemType?: SortOrder
  }

  export type RecyclingEntryAvgOrderByAggregateInput = {
    itemCount?: SortOrder
  }

  export type RecyclingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    itemCount?: SortOrder
    timestamp?: SortOrder
    itemType?: SortOrder
  }

  export type RecyclingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    itemCount?: SortOrder
    timestamp?: SortOrder
    itemType?: SortOrder
  }

  export type RecyclingEntrySumOrderByAggregateInput = {
    itemCount?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LotteryCountOrderByAggregateInput = {
    id?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
  }

  export type LotteryMaxOrderByAggregateInput = {
    id?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
  }

  export type LotteryMinOrderByAggregateInput = {
    id?: SortOrder
    drawDate?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
  }

  export type LotteryScalarRelationFilter = {
    is?: LotteryWhereInput
    isNot?: LotteryWhereInput
  }

  export type RecyclingEntryScalarRelationFilter = {
    is?: RecyclingEntryWhereInput
    isNot?: RecyclingEntryWhereInput
  }

  export type LotteryTicketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lotteryId?: SortOrder
    recyclingEntryId?: SortOrder
    createdAt?: SortOrder
  }

  export type LotteryTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lotteryId?: SortOrder
    recyclingEntryId?: SortOrder
    createdAt?: SortOrder
  }

  export type LotteryTicketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lotteryId?: SortOrder
    recyclingEntryId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecyclingEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<RecyclingEntryCreateWithoutUserInput, RecyclingEntryUncheckedCreateWithoutUserInput> | RecyclingEntryCreateWithoutUserInput[] | RecyclingEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutUserInput | RecyclingEntryCreateOrConnectWithoutUserInput[]
    createMany?: RecyclingEntryCreateManyUserInputEnvelope
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
  }

  export type LotteryTicketCreateNestedManyWithoutUserInput = {
    create?: XOR<LotteryTicketCreateWithoutUserInput, LotteryTicketUncheckedCreateWithoutUserInput> | LotteryTicketCreateWithoutUserInput[] | LotteryTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutUserInput | LotteryTicketCreateOrConnectWithoutUserInput[]
    createMany?: LotteryTicketCreateManyUserInputEnvelope
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
  }

  export type LotteryCreateNestedManyWithoutWinnerInput = {
    create?: XOR<LotteryCreateWithoutWinnerInput, LotteryUncheckedCreateWithoutWinnerInput> | LotteryCreateWithoutWinnerInput[] | LotteryUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: LotteryCreateOrConnectWithoutWinnerInput | LotteryCreateOrConnectWithoutWinnerInput[]
    createMany?: LotteryCreateManyWinnerInputEnvelope
    connect?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
  }

  export type RecyclingEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecyclingEntryCreateWithoutUserInput, RecyclingEntryUncheckedCreateWithoutUserInput> | RecyclingEntryCreateWithoutUserInput[] | RecyclingEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutUserInput | RecyclingEntryCreateOrConnectWithoutUserInput[]
    createMany?: RecyclingEntryCreateManyUserInputEnvelope
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
  }

  export type LotteryTicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LotteryTicketCreateWithoutUserInput, LotteryTicketUncheckedCreateWithoutUserInput> | LotteryTicketCreateWithoutUserInput[] | LotteryTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutUserInput | LotteryTicketCreateOrConnectWithoutUserInput[]
    createMany?: LotteryTicketCreateManyUserInputEnvelope
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
  }

  export type LotteryUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<LotteryCreateWithoutWinnerInput, LotteryUncheckedCreateWithoutWinnerInput> | LotteryCreateWithoutWinnerInput[] | LotteryUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: LotteryCreateOrConnectWithoutWinnerInput | LotteryCreateOrConnectWithoutWinnerInput[]
    createMany?: LotteryCreateManyWinnerInputEnvelope
    connect?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecyclingEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecyclingEntryCreateWithoutUserInput, RecyclingEntryUncheckedCreateWithoutUserInput> | RecyclingEntryCreateWithoutUserInput[] | RecyclingEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutUserInput | RecyclingEntryCreateOrConnectWithoutUserInput[]
    upsert?: RecyclingEntryUpsertWithWhereUniqueWithoutUserInput | RecyclingEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecyclingEntryCreateManyUserInputEnvelope
    set?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    disconnect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    delete?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    update?: RecyclingEntryUpdateWithWhereUniqueWithoutUserInput | RecyclingEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecyclingEntryUpdateManyWithWhereWithoutUserInput | RecyclingEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecyclingEntryScalarWhereInput | RecyclingEntryScalarWhereInput[]
  }

  export type LotteryTicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<LotteryTicketCreateWithoutUserInput, LotteryTicketUncheckedCreateWithoutUserInput> | LotteryTicketCreateWithoutUserInput[] | LotteryTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutUserInput | LotteryTicketCreateOrConnectWithoutUserInput[]
    upsert?: LotteryTicketUpsertWithWhereUniqueWithoutUserInput | LotteryTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LotteryTicketCreateManyUserInputEnvelope
    set?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    disconnect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    delete?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    update?: LotteryTicketUpdateWithWhereUniqueWithoutUserInput | LotteryTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LotteryTicketUpdateManyWithWhereWithoutUserInput | LotteryTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
  }

  export type LotteryUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<LotteryCreateWithoutWinnerInput, LotteryUncheckedCreateWithoutWinnerInput> | LotteryCreateWithoutWinnerInput[] | LotteryUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: LotteryCreateOrConnectWithoutWinnerInput | LotteryCreateOrConnectWithoutWinnerInput[]
    upsert?: LotteryUpsertWithWhereUniqueWithoutWinnerInput | LotteryUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: LotteryCreateManyWinnerInputEnvelope
    set?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    disconnect?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    delete?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    connect?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    update?: LotteryUpdateWithWhereUniqueWithoutWinnerInput | LotteryUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: LotteryUpdateManyWithWhereWithoutWinnerInput | LotteryUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: LotteryScalarWhereInput | LotteryScalarWhereInput[]
  }

  export type RecyclingEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecyclingEntryCreateWithoutUserInput, RecyclingEntryUncheckedCreateWithoutUserInput> | RecyclingEntryCreateWithoutUserInput[] | RecyclingEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutUserInput | RecyclingEntryCreateOrConnectWithoutUserInput[]
    upsert?: RecyclingEntryUpsertWithWhereUniqueWithoutUserInput | RecyclingEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecyclingEntryCreateManyUserInputEnvelope
    set?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    disconnect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    delete?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    update?: RecyclingEntryUpdateWithWhereUniqueWithoutUserInput | RecyclingEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecyclingEntryUpdateManyWithWhereWithoutUserInput | RecyclingEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecyclingEntryScalarWhereInput | RecyclingEntryScalarWhereInput[]
  }

  export type LotteryTicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LotteryTicketCreateWithoutUserInput, LotteryTicketUncheckedCreateWithoutUserInput> | LotteryTicketCreateWithoutUserInput[] | LotteryTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutUserInput | LotteryTicketCreateOrConnectWithoutUserInput[]
    upsert?: LotteryTicketUpsertWithWhereUniqueWithoutUserInput | LotteryTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LotteryTicketCreateManyUserInputEnvelope
    set?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    disconnect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    delete?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    update?: LotteryTicketUpdateWithWhereUniqueWithoutUserInput | LotteryTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LotteryTicketUpdateManyWithWhereWithoutUserInput | LotteryTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
  }

  export type LotteryUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<LotteryCreateWithoutWinnerInput, LotteryUncheckedCreateWithoutWinnerInput> | LotteryCreateWithoutWinnerInput[] | LotteryUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: LotteryCreateOrConnectWithoutWinnerInput | LotteryCreateOrConnectWithoutWinnerInput[]
    upsert?: LotteryUpsertWithWhereUniqueWithoutWinnerInput | LotteryUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: LotteryCreateManyWinnerInputEnvelope
    set?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    disconnect?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    delete?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    connect?: LotteryWhereUniqueInput | LotteryWhereUniqueInput[]
    update?: LotteryUpdateWithWhereUniqueWithoutWinnerInput | LotteryUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: LotteryUpdateManyWithWhereWithoutWinnerInput | LotteryUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: LotteryScalarWhereInput | LotteryScalarWhereInput[]
  }

  export type RecyclingEntryCreateNestedManyWithoutContainerInput = {
    create?: XOR<RecyclingEntryCreateWithoutContainerInput, RecyclingEntryUncheckedCreateWithoutContainerInput> | RecyclingEntryCreateWithoutContainerInput[] | RecyclingEntryUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutContainerInput | RecyclingEntryCreateOrConnectWithoutContainerInput[]
    createMany?: RecyclingEntryCreateManyContainerInputEnvelope
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
  }

  export type RecyclingEntryUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<RecyclingEntryCreateWithoutContainerInput, RecyclingEntryUncheckedCreateWithoutContainerInput> | RecyclingEntryCreateWithoutContainerInput[] | RecyclingEntryUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutContainerInput | RecyclingEntryCreateOrConnectWithoutContainerInput[]
    createMany?: RecyclingEntryCreateManyContainerInputEnvelope
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RecyclingEntryUpdateManyWithoutContainerNestedInput = {
    create?: XOR<RecyclingEntryCreateWithoutContainerInput, RecyclingEntryUncheckedCreateWithoutContainerInput> | RecyclingEntryCreateWithoutContainerInput[] | RecyclingEntryUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutContainerInput | RecyclingEntryCreateOrConnectWithoutContainerInput[]
    upsert?: RecyclingEntryUpsertWithWhereUniqueWithoutContainerInput | RecyclingEntryUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: RecyclingEntryCreateManyContainerInputEnvelope
    set?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    disconnect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    delete?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    update?: RecyclingEntryUpdateWithWhereUniqueWithoutContainerInput | RecyclingEntryUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: RecyclingEntryUpdateManyWithWhereWithoutContainerInput | RecyclingEntryUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: RecyclingEntryScalarWhereInput | RecyclingEntryScalarWhereInput[]
  }

  export type RecyclingEntryUncheckedUpdateManyWithoutContainerNestedInput = {
    create?: XOR<RecyclingEntryCreateWithoutContainerInput, RecyclingEntryUncheckedCreateWithoutContainerInput> | RecyclingEntryCreateWithoutContainerInput[] | RecyclingEntryUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutContainerInput | RecyclingEntryCreateOrConnectWithoutContainerInput[]
    upsert?: RecyclingEntryUpsertWithWhereUniqueWithoutContainerInput | RecyclingEntryUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: RecyclingEntryCreateManyContainerInputEnvelope
    set?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    disconnect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    delete?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    connect?: RecyclingEntryWhereUniqueInput | RecyclingEntryWhereUniqueInput[]
    update?: RecyclingEntryUpdateWithWhereUniqueWithoutContainerInput | RecyclingEntryUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: RecyclingEntryUpdateManyWithWhereWithoutContainerInput | RecyclingEntryUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: RecyclingEntryScalarWhereInput | RecyclingEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecyclingEntriesInput = {
    create?: XOR<UserCreateWithoutRecyclingEntriesInput, UserUncheckedCreateWithoutRecyclingEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecyclingEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type RecyclingContainerCreateNestedOneWithoutRecyclingEntriesInput = {
    create?: XOR<RecyclingContainerCreateWithoutRecyclingEntriesInput, RecyclingContainerUncheckedCreateWithoutRecyclingEntriesInput>
    connectOrCreate?: RecyclingContainerCreateOrConnectWithoutRecyclingEntriesInput
    connect?: RecyclingContainerWhereUniqueInput
  }

  export type LotteryTicketCreateNestedManyWithoutRecyclingEntryInput = {
    create?: XOR<LotteryTicketCreateWithoutRecyclingEntryInput, LotteryTicketUncheckedCreateWithoutRecyclingEntryInput> | LotteryTicketCreateWithoutRecyclingEntryInput[] | LotteryTicketUncheckedCreateWithoutRecyclingEntryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutRecyclingEntryInput | LotteryTicketCreateOrConnectWithoutRecyclingEntryInput[]
    createMany?: LotteryTicketCreateManyRecyclingEntryInputEnvelope
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
  }

  export type LotteryTicketUncheckedCreateNestedManyWithoutRecyclingEntryInput = {
    create?: XOR<LotteryTicketCreateWithoutRecyclingEntryInput, LotteryTicketUncheckedCreateWithoutRecyclingEntryInput> | LotteryTicketCreateWithoutRecyclingEntryInput[] | LotteryTicketUncheckedCreateWithoutRecyclingEntryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutRecyclingEntryInput | LotteryTicketCreateOrConnectWithoutRecyclingEntryInput[]
    createMany?: LotteryTicketCreateManyRecyclingEntryInputEnvelope
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRecyclingEntriesNestedInput = {
    create?: XOR<UserCreateWithoutRecyclingEntriesInput, UserUncheckedCreateWithoutRecyclingEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecyclingEntriesInput
    upsert?: UserUpsertWithoutRecyclingEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecyclingEntriesInput, UserUpdateWithoutRecyclingEntriesInput>, UserUncheckedUpdateWithoutRecyclingEntriesInput>
  }

  export type RecyclingContainerUpdateOneRequiredWithoutRecyclingEntriesNestedInput = {
    create?: XOR<RecyclingContainerCreateWithoutRecyclingEntriesInput, RecyclingContainerUncheckedCreateWithoutRecyclingEntriesInput>
    connectOrCreate?: RecyclingContainerCreateOrConnectWithoutRecyclingEntriesInput
    upsert?: RecyclingContainerUpsertWithoutRecyclingEntriesInput
    connect?: RecyclingContainerWhereUniqueInput
    update?: XOR<XOR<RecyclingContainerUpdateToOneWithWhereWithoutRecyclingEntriesInput, RecyclingContainerUpdateWithoutRecyclingEntriesInput>, RecyclingContainerUncheckedUpdateWithoutRecyclingEntriesInput>
  }

  export type LotteryTicketUpdateManyWithoutRecyclingEntryNestedInput = {
    create?: XOR<LotteryTicketCreateWithoutRecyclingEntryInput, LotteryTicketUncheckedCreateWithoutRecyclingEntryInput> | LotteryTicketCreateWithoutRecyclingEntryInput[] | LotteryTicketUncheckedCreateWithoutRecyclingEntryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutRecyclingEntryInput | LotteryTicketCreateOrConnectWithoutRecyclingEntryInput[]
    upsert?: LotteryTicketUpsertWithWhereUniqueWithoutRecyclingEntryInput | LotteryTicketUpsertWithWhereUniqueWithoutRecyclingEntryInput[]
    createMany?: LotteryTicketCreateManyRecyclingEntryInputEnvelope
    set?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    disconnect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    delete?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    update?: LotteryTicketUpdateWithWhereUniqueWithoutRecyclingEntryInput | LotteryTicketUpdateWithWhereUniqueWithoutRecyclingEntryInput[]
    updateMany?: LotteryTicketUpdateManyWithWhereWithoutRecyclingEntryInput | LotteryTicketUpdateManyWithWhereWithoutRecyclingEntryInput[]
    deleteMany?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
  }

  export type LotteryTicketUncheckedUpdateManyWithoutRecyclingEntryNestedInput = {
    create?: XOR<LotteryTicketCreateWithoutRecyclingEntryInput, LotteryTicketUncheckedCreateWithoutRecyclingEntryInput> | LotteryTicketCreateWithoutRecyclingEntryInput[] | LotteryTicketUncheckedCreateWithoutRecyclingEntryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutRecyclingEntryInput | LotteryTicketCreateOrConnectWithoutRecyclingEntryInput[]
    upsert?: LotteryTicketUpsertWithWhereUniqueWithoutRecyclingEntryInput | LotteryTicketUpsertWithWhereUniqueWithoutRecyclingEntryInput[]
    createMany?: LotteryTicketCreateManyRecyclingEntryInputEnvelope
    set?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    disconnect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    delete?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    update?: LotteryTicketUpdateWithWhereUniqueWithoutRecyclingEntryInput | LotteryTicketUpdateWithWhereUniqueWithoutRecyclingEntryInput[]
    updateMany?: LotteryTicketUpdateManyWithWhereWithoutRecyclingEntryInput | LotteryTicketUpdateManyWithWhereWithoutRecyclingEntryInput[]
    deleteMany?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWonLotteriesInput = {
    create?: XOR<UserCreateWithoutWonLotteriesInput, UserUncheckedCreateWithoutWonLotteriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonLotteriesInput
    connect?: UserWhereUniqueInput
  }

  export type LotteryTicketCreateNestedManyWithoutLotteryInput = {
    create?: XOR<LotteryTicketCreateWithoutLotteryInput, LotteryTicketUncheckedCreateWithoutLotteryInput> | LotteryTicketCreateWithoutLotteryInput[] | LotteryTicketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutLotteryInput | LotteryTicketCreateOrConnectWithoutLotteryInput[]
    createMany?: LotteryTicketCreateManyLotteryInputEnvelope
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
  }

  export type LotteryTicketUncheckedCreateNestedManyWithoutLotteryInput = {
    create?: XOR<LotteryTicketCreateWithoutLotteryInput, LotteryTicketUncheckedCreateWithoutLotteryInput> | LotteryTicketCreateWithoutLotteryInput[] | LotteryTicketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutLotteryInput | LotteryTicketCreateOrConnectWithoutLotteryInput[]
    createMany?: LotteryTicketCreateManyLotteryInputEnvelope
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutWonLotteriesNestedInput = {
    create?: XOR<UserCreateWithoutWonLotteriesInput, UserUncheckedCreateWithoutWonLotteriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonLotteriesInput
    upsert?: UserUpsertWithoutWonLotteriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWonLotteriesInput, UserUpdateWithoutWonLotteriesInput>, UserUncheckedUpdateWithoutWonLotteriesInput>
  }

  export type LotteryTicketUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<LotteryTicketCreateWithoutLotteryInput, LotteryTicketUncheckedCreateWithoutLotteryInput> | LotteryTicketCreateWithoutLotteryInput[] | LotteryTicketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutLotteryInput | LotteryTicketCreateOrConnectWithoutLotteryInput[]
    upsert?: LotteryTicketUpsertWithWhereUniqueWithoutLotteryInput | LotteryTicketUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: LotteryTicketCreateManyLotteryInputEnvelope
    set?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    disconnect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    delete?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    update?: LotteryTicketUpdateWithWhereUniqueWithoutLotteryInput | LotteryTicketUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: LotteryTicketUpdateManyWithWhereWithoutLotteryInput | LotteryTicketUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
  }

  export type LotteryTicketUncheckedUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<LotteryTicketCreateWithoutLotteryInput, LotteryTicketUncheckedCreateWithoutLotteryInput> | LotteryTicketCreateWithoutLotteryInput[] | LotteryTicketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: LotteryTicketCreateOrConnectWithoutLotteryInput | LotteryTicketCreateOrConnectWithoutLotteryInput[]
    upsert?: LotteryTicketUpsertWithWhereUniqueWithoutLotteryInput | LotteryTicketUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: LotteryTicketCreateManyLotteryInputEnvelope
    set?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    disconnect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    delete?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    connect?: LotteryTicketWhereUniqueInput | LotteryTicketWhereUniqueInput[]
    update?: LotteryTicketUpdateWithWhereUniqueWithoutLotteryInput | LotteryTicketUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: LotteryTicketUpdateManyWithWhereWithoutLotteryInput | LotteryTicketUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLotteryTicketsInput = {
    create?: XOR<UserCreateWithoutLotteryTicketsInput, UserUncheckedCreateWithoutLotteryTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLotteryTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type LotteryCreateNestedOneWithoutLotteryTicketsInput = {
    create?: XOR<LotteryCreateWithoutLotteryTicketsInput, LotteryUncheckedCreateWithoutLotteryTicketsInput>
    connectOrCreate?: LotteryCreateOrConnectWithoutLotteryTicketsInput
    connect?: LotteryWhereUniqueInput
  }

  export type RecyclingEntryCreateNestedOneWithoutLotteryTicketsInput = {
    create?: XOR<RecyclingEntryCreateWithoutLotteryTicketsInput, RecyclingEntryUncheckedCreateWithoutLotteryTicketsInput>
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutLotteryTicketsInput
    connect?: RecyclingEntryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLotteryTicketsNestedInput = {
    create?: XOR<UserCreateWithoutLotteryTicketsInput, UserUncheckedCreateWithoutLotteryTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLotteryTicketsInput
    upsert?: UserUpsertWithoutLotteryTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLotteryTicketsInput, UserUpdateWithoutLotteryTicketsInput>, UserUncheckedUpdateWithoutLotteryTicketsInput>
  }

  export type LotteryUpdateOneRequiredWithoutLotteryTicketsNestedInput = {
    create?: XOR<LotteryCreateWithoutLotteryTicketsInput, LotteryUncheckedCreateWithoutLotteryTicketsInput>
    connectOrCreate?: LotteryCreateOrConnectWithoutLotteryTicketsInput
    upsert?: LotteryUpsertWithoutLotteryTicketsInput
    connect?: LotteryWhereUniqueInput
    update?: XOR<XOR<LotteryUpdateToOneWithWhereWithoutLotteryTicketsInput, LotteryUpdateWithoutLotteryTicketsInput>, LotteryUncheckedUpdateWithoutLotteryTicketsInput>
  }

  export type RecyclingEntryUpdateOneRequiredWithoutLotteryTicketsNestedInput = {
    create?: XOR<RecyclingEntryCreateWithoutLotteryTicketsInput, RecyclingEntryUncheckedCreateWithoutLotteryTicketsInput>
    connectOrCreate?: RecyclingEntryCreateOrConnectWithoutLotteryTicketsInput
    upsert?: RecyclingEntryUpsertWithoutLotteryTicketsInput
    connect?: RecyclingEntryWhereUniqueInput
    update?: XOR<XOR<RecyclingEntryUpdateToOneWithWhereWithoutLotteryTicketsInput, RecyclingEntryUpdateWithoutLotteryTicketsInput>, RecyclingEntryUncheckedUpdateWithoutLotteryTicketsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RecyclingEntryCreateWithoutUserInput = {
    id?: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
    container: RecyclingContainerCreateNestedOneWithoutRecyclingEntriesInput
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutRecyclingEntryInput
  }

  export type RecyclingEntryUncheckedCreateWithoutUserInput = {
    id?: string
    containerId: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutRecyclingEntryInput
  }

  export type RecyclingEntryCreateOrConnectWithoutUserInput = {
    where: RecyclingEntryWhereUniqueInput
    create: XOR<RecyclingEntryCreateWithoutUserInput, RecyclingEntryUncheckedCreateWithoutUserInput>
  }

  export type RecyclingEntryCreateManyUserInputEnvelope = {
    data: RecyclingEntryCreateManyUserInput | RecyclingEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LotteryTicketCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    lottery: LotteryCreateNestedOneWithoutLotteryTicketsInput
    recyclingEntry: RecyclingEntryCreateNestedOneWithoutLotteryTicketsInput
  }

  export type LotteryTicketUncheckedCreateWithoutUserInput = {
    id?: string
    lotteryId: string
    recyclingEntryId: string
    createdAt?: Date | string
  }

  export type LotteryTicketCreateOrConnectWithoutUserInput = {
    where: LotteryTicketWhereUniqueInput
    create: XOR<LotteryTicketCreateWithoutUserInput, LotteryTicketUncheckedCreateWithoutUserInput>
  }

  export type LotteryTicketCreateManyUserInputEnvelope = {
    data: LotteryTicketCreateManyUserInput | LotteryTicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LotteryCreateWithoutWinnerInput = {
    id?: string
    drawDate: Date | string
    status: string
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutLotteryInput
  }

  export type LotteryUncheckedCreateWithoutWinnerInput = {
    id?: string
    drawDate: Date | string
    status: string
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutLotteryInput
  }

  export type LotteryCreateOrConnectWithoutWinnerInput = {
    where: LotteryWhereUniqueInput
    create: XOR<LotteryCreateWithoutWinnerInput, LotteryUncheckedCreateWithoutWinnerInput>
  }

  export type LotteryCreateManyWinnerInputEnvelope = {
    data: LotteryCreateManyWinnerInput | LotteryCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type RecyclingEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: RecyclingEntryWhereUniqueInput
    update: XOR<RecyclingEntryUpdateWithoutUserInput, RecyclingEntryUncheckedUpdateWithoutUserInput>
    create: XOR<RecyclingEntryCreateWithoutUserInput, RecyclingEntryUncheckedCreateWithoutUserInput>
  }

  export type RecyclingEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: RecyclingEntryWhereUniqueInput
    data: XOR<RecyclingEntryUpdateWithoutUserInput, RecyclingEntryUncheckedUpdateWithoutUserInput>
  }

  export type RecyclingEntryUpdateManyWithWhereWithoutUserInput = {
    where: RecyclingEntryScalarWhereInput
    data: XOR<RecyclingEntryUpdateManyMutationInput, RecyclingEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type RecyclingEntryScalarWhereInput = {
    AND?: RecyclingEntryScalarWhereInput | RecyclingEntryScalarWhereInput[]
    OR?: RecyclingEntryScalarWhereInput[]
    NOT?: RecyclingEntryScalarWhereInput | RecyclingEntryScalarWhereInput[]
    id?: StringFilter<"RecyclingEntry"> | string
    userId?: StringFilter<"RecyclingEntry"> | string
    containerId?: StringFilter<"RecyclingEntry"> | string
    itemCount?: IntFilter<"RecyclingEntry"> | number
    timestamp?: DateTimeFilter<"RecyclingEntry"> | Date | string
    itemType?: StringFilter<"RecyclingEntry"> | string
  }

  export type LotteryTicketUpsertWithWhereUniqueWithoutUserInput = {
    where: LotteryTicketWhereUniqueInput
    update: XOR<LotteryTicketUpdateWithoutUserInput, LotteryTicketUncheckedUpdateWithoutUserInput>
    create: XOR<LotteryTicketCreateWithoutUserInput, LotteryTicketUncheckedCreateWithoutUserInput>
  }

  export type LotteryTicketUpdateWithWhereUniqueWithoutUserInput = {
    where: LotteryTicketWhereUniqueInput
    data: XOR<LotteryTicketUpdateWithoutUserInput, LotteryTicketUncheckedUpdateWithoutUserInput>
  }

  export type LotteryTicketUpdateManyWithWhereWithoutUserInput = {
    where: LotteryTicketScalarWhereInput
    data: XOR<LotteryTicketUpdateManyMutationInput, LotteryTicketUncheckedUpdateManyWithoutUserInput>
  }

  export type LotteryTicketScalarWhereInput = {
    AND?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
    OR?: LotteryTicketScalarWhereInput[]
    NOT?: LotteryTicketScalarWhereInput | LotteryTicketScalarWhereInput[]
    id?: StringFilter<"LotteryTicket"> | string
    userId?: StringFilter<"LotteryTicket"> | string
    lotteryId?: StringFilter<"LotteryTicket"> | string
    recyclingEntryId?: StringFilter<"LotteryTicket"> | string
    createdAt?: DateTimeFilter<"LotteryTicket"> | Date | string
  }

  export type LotteryUpsertWithWhereUniqueWithoutWinnerInput = {
    where: LotteryWhereUniqueInput
    update: XOR<LotteryUpdateWithoutWinnerInput, LotteryUncheckedUpdateWithoutWinnerInput>
    create: XOR<LotteryCreateWithoutWinnerInput, LotteryUncheckedCreateWithoutWinnerInput>
  }

  export type LotteryUpdateWithWhereUniqueWithoutWinnerInput = {
    where: LotteryWhereUniqueInput
    data: XOR<LotteryUpdateWithoutWinnerInput, LotteryUncheckedUpdateWithoutWinnerInput>
  }

  export type LotteryUpdateManyWithWhereWithoutWinnerInput = {
    where: LotteryScalarWhereInput
    data: XOR<LotteryUpdateManyMutationInput, LotteryUncheckedUpdateManyWithoutWinnerInput>
  }

  export type LotteryScalarWhereInput = {
    AND?: LotteryScalarWhereInput | LotteryScalarWhereInput[]
    OR?: LotteryScalarWhereInput[]
    NOT?: LotteryScalarWhereInput | LotteryScalarWhereInput[]
    id?: StringFilter<"Lottery"> | string
    drawDate?: DateTimeFilter<"Lottery"> | Date | string
    status?: StringFilter<"Lottery"> | string
    winnerId?: StringNullableFilter<"Lottery"> | string | null
  }

  export type RecyclingEntryCreateWithoutContainerInput = {
    id?: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
    user: UserCreateNestedOneWithoutRecyclingEntriesInput
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutRecyclingEntryInput
  }

  export type RecyclingEntryUncheckedCreateWithoutContainerInput = {
    id?: string
    userId: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutRecyclingEntryInput
  }

  export type RecyclingEntryCreateOrConnectWithoutContainerInput = {
    where: RecyclingEntryWhereUniqueInput
    create: XOR<RecyclingEntryCreateWithoutContainerInput, RecyclingEntryUncheckedCreateWithoutContainerInput>
  }

  export type RecyclingEntryCreateManyContainerInputEnvelope = {
    data: RecyclingEntryCreateManyContainerInput | RecyclingEntryCreateManyContainerInput[]
    skipDuplicates?: boolean
  }

  export type RecyclingEntryUpsertWithWhereUniqueWithoutContainerInput = {
    where: RecyclingEntryWhereUniqueInput
    update: XOR<RecyclingEntryUpdateWithoutContainerInput, RecyclingEntryUncheckedUpdateWithoutContainerInput>
    create: XOR<RecyclingEntryCreateWithoutContainerInput, RecyclingEntryUncheckedCreateWithoutContainerInput>
  }

  export type RecyclingEntryUpdateWithWhereUniqueWithoutContainerInput = {
    where: RecyclingEntryWhereUniqueInput
    data: XOR<RecyclingEntryUpdateWithoutContainerInput, RecyclingEntryUncheckedUpdateWithoutContainerInput>
  }

  export type RecyclingEntryUpdateManyWithWhereWithoutContainerInput = {
    where: RecyclingEntryScalarWhereInput
    data: XOR<RecyclingEntryUpdateManyMutationInput, RecyclingEntryUncheckedUpdateManyWithoutContainerInput>
  }

  export type UserCreateWithoutRecyclingEntriesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutUserInput
    wonLotteries?: LotteryCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutRecyclingEntriesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutUserInput
    wonLotteries?: LotteryUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutRecyclingEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecyclingEntriesInput, UserUncheckedCreateWithoutRecyclingEntriesInput>
  }

  export type RecyclingContainerCreateWithoutRecyclingEntriesInput = {
    id?: string
    location: string
    area: string
    capacity: number
    currentFillLevel?: number
    lastEmptied?: Date | string | null
  }

  export type RecyclingContainerUncheckedCreateWithoutRecyclingEntriesInput = {
    id?: string
    location: string
    area: string
    capacity: number
    currentFillLevel?: number
    lastEmptied?: Date | string | null
  }

  export type RecyclingContainerCreateOrConnectWithoutRecyclingEntriesInput = {
    where: RecyclingContainerWhereUniqueInput
    create: XOR<RecyclingContainerCreateWithoutRecyclingEntriesInput, RecyclingContainerUncheckedCreateWithoutRecyclingEntriesInput>
  }

  export type LotteryTicketCreateWithoutRecyclingEntryInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLotteryTicketsInput
    lottery: LotteryCreateNestedOneWithoutLotteryTicketsInput
  }

  export type LotteryTicketUncheckedCreateWithoutRecyclingEntryInput = {
    id?: string
    userId: string
    lotteryId: string
    createdAt?: Date | string
  }

  export type LotteryTicketCreateOrConnectWithoutRecyclingEntryInput = {
    where: LotteryTicketWhereUniqueInput
    create: XOR<LotteryTicketCreateWithoutRecyclingEntryInput, LotteryTicketUncheckedCreateWithoutRecyclingEntryInput>
  }

  export type LotteryTicketCreateManyRecyclingEntryInputEnvelope = {
    data: LotteryTicketCreateManyRecyclingEntryInput | LotteryTicketCreateManyRecyclingEntryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecyclingEntriesInput = {
    update: XOR<UserUpdateWithoutRecyclingEntriesInput, UserUncheckedUpdateWithoutRecyclingEntriesInput>
    create: XOR<UserCreateWithoutRecyclingEntriesInput, UserUncheckedCreateWithoutRecyclingEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecyclingEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecyclingEntriesInput, UserUncheckedUpdateWithoutRecyclingEntriesInput>
  }

  export type UserUpdateWithoutRecyclingEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    lotteryTickets?: LotteryTicketUpdateManyWithoutUserNestedInput
    wonLotteries?: LotteryUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRecyclingEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutUserNestedInput
    wonLotteries?: LotteryUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type RecyclingContainerUpsertWithoutRecyclingEntriesInput = {
    update: XOR<RecyclingContainerUpdateWithoutRecyclingEntriesInput, RecyclingContainerUncheckedUpdateWithoutRecyclingEntriesInput>
    create: XOR<RecyclingContainerCreateWithoutRecyclingEntriesInput, RecyclingContainerUncheckedCreateWithoutRecyclingEntriesInput>
    where?: RecyclingContainerWhereInput
  }

  export type RecyclingContainerUpdateToOneWithWhereWithoutRecyclingEntriesInput = {
    where?: RecyclingContainerWhereInput
    data: XOR<RecyclingContainerUpdateWithoutRecyclingEntriesInput, RecyclingContainerUncheckedUpdateWithoutRecyclingEntriesInput>
  }

  export type RecyclingContainerUpdateWithoutRecyclingEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentFillLevel?: IntFieldUpdateOperationsInput | number
    lastEmptied?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecyclingContainerUncheckedUpdateWithoutRecyclingEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentFillLevel?: IntFieldUpdateOperationsInput | number
    lastEmptied?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LotteryTicketUpsertWithWhereUniqueWithoutRecyclingEntryInput = {
    where: LotteryTicketWhereUniqueInput
    update: XOR<LotteryTicketUpdateWithoutRecyclingEntryInput, LotteryTicketUncheckedUpdateWithoutRecyclingEntryInput>
    create: XOR<LotteryTicketCreateWithoutRecyclingEntryInput, LotteryTicketUncheckedCreateWithoutRecyclingEntryInput>
  }

  export type LotteryTicketUpdateWithWhereUniqueWithoutRecyclingEntryInput = {
    where: LotteryTicketWhereUniqueInput
    data: XOR<LotteryTicketUpdateWithoutRecyclingEntryInput, LotteryTicketUncheckedUpdateWithoutRecyclingEntryInput>
  }

  export type LotteryTicketUpdateManyWithWhereWithoutRecyclingEntryInput = {
    where: LotteryTicketScalarWhereInput
    data: XOR<LotteryTicketUpdateManyMutationInput, LotteryTicketUncheckedUpdateManyWithoutRecyclingEntryInput>
  }

  export type UserCreateWithoutWonLotteriesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    recyclingEntries?: RecyclingEntryCreateNestedManyWithoutUserInput
    lotteryTickets?: LotteryTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWonLotteriesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    recyclingEntries?: RecyclingEntryUncheckedCreateNestedManyWithoutUserInput
    lotteryTickets?: LotteryTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWonLotteriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWonLotteriesInput, UserUncheckedCreateWithoutWonLotteriesInput>
  }

  export type LotteryTicketCreateWithoutLotteryInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLotteryTicketsInput
    recyclingEntry: RecyclingEntryCreateNestedOneWithoutLotteryTicketsInput
  }

  export type LotteryTicketUncheckedCreateWithoutLotteryInput = {
    id?: string
    userId: string
    recyclingEntryId: string
    createdAt?: Date | string
  }

  export type LotteryTicketCreateOrConnectWithoutLotteryInput = {
    where: LotteryTicketWhereUniqueInput
    create: XOR<LotteryTicketCreateWithoutLotteryInput, LotteryTicketUncheckedCreateWithoutLotteryInput>
  }

  export type LotteryTicketCreateManyLotteryInputEnvelope = {
    data: LotteryTicketCreateManyLotteryInput | LotteryTicketCreateManyLotteryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWonLotteriesInput = {
    update: XOR<UserUpdateWithoutWonLotteriesInput, UserUncheckedUpdateWithoutWonLotteriesInput>
    create: XOR<UserCreateWithoutWonLotteriesInput, UserUncheckedCreateWithoutWonLotteriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWonLotteriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWonLotteriesInput, UserUncheckedUpdateWithoutWonLotteriesInput>
  }

  export type UserUpdateWithoutWonLotteriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    recyclingEntries?: RecyclingEntryUpdateManyWithoutUserNestedInput
    lotteryTickets?: LotteryTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWonLotteriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    recyclingEntries?: RecyclingEntryUncheckedUpdateManyWithoutUserNestedInput
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LotteryTicketUpsertWithWhereUniqueWithoutLotteryInput = {
    where: LotteryTicketWhereUniqueInput
    update: XOR<LotteryTicketUpdateWithoutLotteryInput, LotteryTicketUncheckedUpdateWithoutLotteryInput>
    create: XOR<LotteryTicketCreateWithoutLotteryInput, LotteryTicketUncheckedCreateWithoutLotteryInput>
  }

  export type LotteryTicketUpdateWithWhereUniqueWithoutLotteryInput = {
    where: LotteryTicketWhereUniqueInput
    data: XOR<LotteryTicketUpdateWithoutLotteryInput, LotteryTicketUncheckedUpdateWithoutLotteryInput>
  }

  export type LotteryTicketUpdateManyWithWhereWithoutLotteryInput = {
    where: LotteryTicketScalarWhereInput
    data: XOR<LotteryTicketUpdateManyMutationInput, LotteryTicketUncheckedUpdateManyWithoutLotteryInput>
  }

  export type UserCreateWithoutLotteryTicketsInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    recyclingEntries?: RecyclingEntryCreateNestedManyWithoutUserInput
    wonLotteries?: LotteryCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutLotteryTicketsInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barcode: string
    recyclingEntries?: RecyclingEntryUncheckedCreateNestedManyWithoutUserInput
    wonLotteries?: LotteryUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutLotteryTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLotteryTicketsInput, UserUncheckedCreateWithoutLotteryTicketsInput>
  }

  export type LotteryCreateWithoutLotteryTicketsInput = {
    id?: string
    drawDate: Date | string
    status: string
    winner?: UserCreateNestedOneWithoutWonLotteriesInput
  }

  export type LotteryUncheckedCreateWithoutLotteryTicketsInput = {
    id?: string
    drawDate: Date | string
    status: string
    winnerId?: string | null
  }

  export type LotteryCreateOrConnectWithoutLotteryTicketsInput = {
    where: LotteryWhereUniqueInput
    create: XOR<LotteryCreateWithoutLotteryTicketsInput, LotteryUncheckedCreateWithoutLotteryTicketsInput>
  }

  export type RecyclingEntryCreateWithoutLotteryTicketsInput = {
    id?: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
    user: UserCreateNestedOneWithoutRecyclingEntriesInput
    container: RecyclingContainerCreateNestedOneWithoutRecyclingEntriesInput
  }

  export type RecyclingEntryUncheckedCreateWithoutLotteryTicketsInput = {
    id?: string
    userId: string
    containerId: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
  }

  export type RecyclingEntryCreateOrConnectWithoutLotteryTicketsInput = {
    where: RecyclingEntryWhereUniqueInput
    create: XOR<RecyclingEntryCreateWithoutLotteryTicketsInput, RecyclingEntryUncheckedCreateWithoutLotteryTicketsInput>
  }

  export type UserUpsertWithoutLotteryTicketsInput = {
    update: XOR<UserUpdateWithoutLotteryTicketsInput, UserUncheckedUpdateWithoutLotteryTicketsInput>
    create: XOR<UserCreateWithoutLotteryTicketsInput, UserUncheckedCreateWithoutLotteryTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLotteryTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLotteryTicketsInput, UserUncheckedUpdateWithoutLotteryTicketsInput>
  }

  export type UserUpdateWithoutLotteryTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    recyclingEntries?: RecyclingEntryUpdateManyWithoutUserNestedInput
    wonLotteries?: LotteryUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutLotteryTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcode?: StringFieldUpdateOperationsInput | string
    recyclingEntries?: RecyclingEntryUncheckedUpdateManyWithoutUserNestedInput
    wonLotteries?: LotteryUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type LotteryUpsertWithoutLotteryTicketsInput = {
    update: XOR<LotteryUpdateWithoutLotteryTicketsInput, LotteryUncheckedUpdateWithoutLotteryTicketsInput>
    create: XOR<LotteryCreateWithoutLotteryTicketsInput, LotteryUncheckedCreateWithoutLotteryTicketsInput>
    where?: LotteryWhereInput
  }

  export type LotteryUpdateToOneWithWhereWithoutLotteryTicketsInput = {
    where?: LotteryWhereInput
    data: XOR<LotteryUpdateWithoutLotteryTicketsInput, LotteryUncheckedUpdateWithoutLotteryTicketsInput>
  }

  export type LotteryUpdateWithoutLotteryTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    winner?: UserUpdateOneWithoutWonLotteriesNestedInput
  }

  export type LotteryUncheckedUpdateWithoutLotteryTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecyclingEntryUpsertWithoutLotteryTicketsInput = {
    update: XOR<RecyclingEntryUpdateWithoutLotteryTicketsInput, RecyclingEntryUncheckedUpdateWithoutLotteryTicketsInput>
    create: XOR<RecyclingEntryCreateWithoutLotteryTicketsInput, RecyclingEntryUncheckedCreateWithoutLotteryTicketsInput>
    where?: RecyclingEntryWhereInput
  }

  export type RecyclingEntryUpdateToOneWithWhereWithoutLotteryTicketsInput = {
    where?: RecyclingEntryWhereInput
    data: XOR<RecyclingEntryUpdateWithoutLotteryTicketsInput, RecyclingEntryUncheckedUpdateWithoutLotteryTicketsInput>
  }

  export type RecyclingEntryUpdateWithoutLotteryTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRecyclingEntriesNestedInput
    container?: RecyclingContainerUpdateOneRequiredWithoutRecyclingEntriesNestedInput
  }

  export type RecyclingEntryUncheckedUpdateWithoutLotteryTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
  }

  export type RecyclingEntryCreateManyUserInput = {
    id?: string
    containerId: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
  }

  export type LotteryTicketCreateManyUserInput = {
    id?: string
    lotteryId: string
    recyclingEntryId: string
    createdAt?: Date | string
  }

  export type LotteryCreateManyWinnerInput = {
    id?: string
    drawDate: Date | string
    status: string
  }

  export type RecyclingEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
    container?: RecyclingContainerUpdateOneRequiredWithoutRecyclingEntriesNestedInput
    lotteryTickets?: LotteryTicketUpdateManyWithoutRecyclingEntryNestedInput
  }

  export type RecyclingEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutRecyclingEntryNestedInput
  }

  export type RecyclingEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
  }

  export type LotteryTicketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lottery?: LotteryUpdateOneRequiredWithoutLotteryTicketsNestedInput
    recyclingEntry?: RecyclingEntryUpdateOneRequiredWithoutLotteryTicketsNestedInput
  }

  export type LotteryTicketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotteryId?: StringFieldUpdateOperationsInput | string
    recyclingEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryTicketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotteryId?: StringFieldUpdateOperationsInput | string
    recyclingEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lotteryTickets?: LotteryTicketUpdateManyWithoutLotteryNestedInput
  }

  export type LotteryUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutLotteryNestedInput
  }

  export type LotteryUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RecyclingEntryCreateManyContainerInput = {
    id?: string
    userId: string
    itemCount: number
    timestamp?: Date | string
    itemType: string
  }

  export type RecyclingEntryUpdateWithoutContainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRecyclingEntriesNestedInput
    lotteryTickets?: LotteryTicketUpdateManyWithoutRecyclingEntryNestedInput
  }

  export type RecyclingEntryUncheckedUpdateWithoutContainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
    lotteryTickets?: LotteryTicketUncheckedUpdateManyWithoutRecyclingEntryNestedInput
  }

  export type RecyclingEntryUncheckedUpdateManyWithoutContainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemCount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    itemType?: StringFieldUpdateOperationsInput | string
  }

  export type LotteryTicketCreateManyRecyclingEntryInput = {
    id?: string
    userId: string
    lotteryId: string
    createdAt?: Date | string
  }

  export type LotteryTicketUpdateWithoutRecyclingEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLotteryTicketsNestedInput
    lottery?: LotteryUpdateOneRequiredWithoutLotteryTicketsNestedInput
  }

  export type LotteryTicketUncheckedUpdateWithoutRecyclingEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lotteryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryTicketUncheckedUpdateManyWithoutRecyclingEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lotteryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryTicketCreateManyLotteryInput = {
    id?: string
    userId: string
    recyclingEntryId: string
    createdAt?: Date | string
  }

  export type LotteryTicketUpdateWithoutLotteryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLotteryTicketsNestedInput
    recyclingEntry?: RecyclingEntryUpdateOneRequiredWithoutLotteryTicketsNestedInput
  }

  export type LotteryTicketUncheckedUpdateWithoutLotteryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recyclingEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryTicketUncheckedUpdateManyWithoutLotteryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recyclingEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}