
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
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Cluster
 * 
 */
export type Cluster = $Result.DefaultSelection<Prisma.$ClusterPayload>
/**
 * Model ClusterArticle
 * 
 */
export type ClusterArticle = $Result.DefaultSelection<Prisma.$ClusterArticlePayload>
/**
 * Model Preference
 * 
 */
export type Preference = $Result.DefaultSelection<Prisma.$PreferencePayload>
/**
 * Model FeedSnapshot
 * 
 */
export type FeedSnapshot = $Result.DefaultSelection<Prisma.$FeedSnapshotPayload>
/**
 * Model Interaction
 * 
 */
export type Interaction = $Result.DefaultSelection<Prisma.$InteractionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model IngestionRun
 * 
 */
export type IngestionRun = $Result.DefaultSelection<Prisma.$IngestionRunPayload>
/**
 * Model SourceFetch
 * 
 */
export type SourceFetch = $Result.DefaultSelection<Prisma.$SourceFetchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
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
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cluster`: Exposes CRUD operations for the **Cluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clusters
    * const clusters = await prisma.cluster.findMany()
    * ```
    */
  get cluster(): Prisma.ClusterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clusterArticle`: Exposes CRUD operations for the **ClusterArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClusterArticles
    * const clusterArticles = await prisma.clusterArticle.findMany()
    * ```
    */
  get clusterArticle(): Prisma.ClusterArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preference`: Exposes CRUD operations for the **Preference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preference.findMany()
    * ```
    */
  get preference(): Prisma.PreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedSnapshot`: Exposes CRUD operations for the **FeedSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedSnapshots
    * const feedSnapshots = await prisma.feedSnapshot.findMany()
    * ```
    */
  get feedSnapshot(): Prisma.FeedSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interaction`: Exposes CRUD operations for the **Interaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interactions
    * const interactions = await prisma.interaction.findMany()
    * ```
    */
  get interaction(): Prisma.InteractionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingestionRun`: Exposes CRUD operations for the **IngestionRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestionRuns
    * const ingestionRuns = await prisma.ingestionRun.findMany()
    * ```
    */
  get ingestionRun(): Prisma.IngestionRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceFetch`: Exposes CRUD operations for the **SourceFetch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceFetches
    * const sourceFetches = await prisma.sourceFetch.findMany()
    * ```
    */
  get sourceFetch(): Prisma.SourceFetchDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Article: 'Article',
    Cluster: 'Cluster',
    ClusterArticle: 'ClusterArticle',
    Preference: 'Preference',
    FeedSnapshot: 'FeedSnapshot',
    Interaction: 'Interaction',
    User: 'User',
    Session: 'Session',
    IngestionRun: 'IngestionRun',
    SourceFetch: 'SourceFetch'
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
      modelProps: "article" | "cluster" | "clusterArticle" | "preference" | "feedSnapshot" | "interaction" | "user" | "session" | "ingestionRun" | "sourceFetch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Cluster: {
        payload: Prisma.$ClusterPayload<ExtArgs>
        fields: Prisma.ClusterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClusterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClusterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findFirst: {
            args: Prisma.ClusterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClusterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findMany: {
            args: Prisma.ClusterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          create: {
            args: Prisma.ClusterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          createMany: {
            args: Prisma.ClusterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClusterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          delete: {
            args: Prisma.ClusterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          update: {
            args: Prisma.ClusterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          deleteMany: {
            args: Prisma.ClusterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClusterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClusterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          upsert: {
            args: Prisma.ClusterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          aggregate: {
            args: Prisma.ClusterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCluster>
          }
          groupBy: {
            args: Prisma.ClusterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClusterCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterCountAggregateOutputType> | number
          }
        }
      }
      ClusterArticle: {
        payload: Prisma.$ClusterArticlePayload<ExtArgs>
        fields: Prisma.ClusterArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClusterArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClusterArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>
          }
          findFirst: {
            args: Prisma.ClusterArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClusterArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>
          }
          findMany: {
            args: Prisma.ClusterArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>[]
          }
          create: {
            args: Prisma.ClusterArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>
          }
          createMany: {
            args: Prisma.ClusterArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClusterArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>[]
          }
          delete: {
            args: Prisma.ClusterArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>
          }
          update: {
            args: Prisma.ClusterArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>
          }
          deleteMany: {
            args: Prisma.ClusterArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClusterArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClusterArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>[]
          }
          upsert: {
            args: Prisma.ClusterArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterArticlePayload>
          }
          aggregate: {
            args: Prisma.ClusterArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClusterArticle>
          }
          groupBy: {
            args: Prisma.ClusterArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClusterArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterArticleCountAggregateOutputType> | number
          }
        }
      }
      Preference: {
        payload: Prisma.$PreferencePayload<ExtArgs>
        fields: Prisma.PreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          findFirst: {
            args: Prisma.PreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          findMany: {
            args: Prisma.PreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          create: {
            args: Prisma.PreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          createMany: {
            args: Prisma.PreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          delete: {
            args: Prisma.PreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          update: {
            args: Prisma.PreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          deleteMany: {
            args: Prisma.PreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          upsert: {
            args: Prisma.PreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          aggregate: {
            args: Prisma.PreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreference>
          }
          groupBy: {
            args: Prisma.PreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<PreferenceCountAggregateOutputType> | number
          }
        }
      }
      FeedSnapshot: {
        payload: Prisma.$FeedSnapshotPayload<ExtArgs>
        fields: Prisma.FeedSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>
          }
          findFirst: {
            args: Prisma.FeedSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>
          }
          findMany: {
            args: Prisma.FeedSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>[]
          }
          create: {
            args: Prisma.FeedSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>
          }
          createMany: {
            args: Prisma.FeedSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>[]
          }
          delete: {
            args: Prisma.FeedSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>
          }
          update: {
            args: Prisma.FeedSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.FeedSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.FeedSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedSnapshotPayload>
          }
          aggregate: {
            args: Prisma.FeedSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedSnapshot>
          }
          groupBy: {
            args: Prisma.FeedSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<FeedSnapshotCountAggregateOutputType> | number
          }
        }
      }
      Interaction: {
        payload: Prisma.$InteractionPayload<ExtArgs>
        fields: Prisma.InteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findFirst: {
            args: Prisma.InteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findMany: {
            args: Prisma.InteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          create: {
            args: Prisma.InteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          createMany: {
            args: Prisma.InteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          delete: {
            args: Prisma.InteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          update: {
            args: Prisma.InteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          deleteMany: {
            args: Prisma.InteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          upsert: {
            args: Prisma.InteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          aggregate: {
            args: Prisma.InteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteraction>
          }
          groupBy: {
            args: Prisma.InteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteractionCountArgs<ExtArgs>
            result: $Utils.Optional<InteractionCountAggregateOutputType> | number
          }
        }
      }
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      IngestionRun: {
        payload: Prisma.$IngestionRunPayload<ExtArgs>
        fields: Prisma.IngestionRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestionRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestionRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>
          }
          findFirst: {
            args: Prisma.IngestionRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestionRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>
          }
          findMany: {
            args: Prisma.IngestionRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>[]
          }
          create: {
            args: Prisma.IngestionRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>
          }
          createMany: {
            args: Prisma.IngestionRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestionRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>[]
          }
          delete: {
            args: Prisma.IngestionRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>
          }
          update: {
            args: Prisma.IngestionRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>
          }
          deleteMany: {
            args: Prisma.IngestionRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestionRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngestionRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>[]
          }
          upsert: {
            args: Prisma.IngestionRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionRunPayload>
          }
          aggregate: {
            args: Prisma.IngestionRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestionRun>
          }
          groupBy: {
            args: Prisma.IngestionRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestionRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestionRunCountArgs<ExtArgs>
            result: $Utils.Optional<IngestionRunCountAggregateOutputType> | number
          }
        }
      }
      SourceFetch: {
        payload: Prisma.$SourceFetchPayload<ExtArgs>
        fields: Prisma.SourceFetchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFetchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFetchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>
          }
          findFirst: {
            args: Prisma.SourceFetchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFetchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>
          }
          findMany: {
            args: Prisma.SourceFetchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>[]
          }
          create: {
            args: Prisma.SourceFetchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>
          }
          createMany: {
            args: Prisma.SourceFetchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceFetchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>[]
          }
          delete: {
            args: Prisma.SourceFetchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>
          }
          update: {
            args: Prisma.SourceFetchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>
          }
          deleteMany: {
            args: Prisma.SourceFetchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceFetchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceFetchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>[]
          }
          upsert: {
            args: Prisma.SourceFetchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceFetchPayload>
          }
          aggregate: {
            args: Prisma.SourceFetchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceFetch>
          }
          groupBy: {
            args: Prisma.SourceFetchGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceFetchGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceFetchCountArgs<ExtArgs>
            result: $Utils.Optional<SourceFetchCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    article?: ArticleOmit
    cluster?: ClusterOmit
    clusterArticle?: ClusterArticleOmit
    preference?: PreferenceOmit
    feedSnapshot?: FeedSnapshotOmit
    interaction?: InteractionOmit
    user?: UserOmit
    session?: SessionOmit
    ingestionRun?: IngestionRunOmit
    sourceFetch?: SourceFetchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    clusterLinks: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clusterLinks?: boolean | ArticleCountOutputTypeCountClusterLinksArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountClusterLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterArticleWhereInput
  }


  /**
   * Count Type ClusterCountOutputType
   */

  export type ClusterCountOutputType = {
    articles: number
  }

  export type ClusterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | ClusterCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterCountOutputType
     */
    select?: ClusterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterArticleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    articles: number
    clusters: number
    snapshots: number
    ingestionRuns: number
    interactions: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    clusters?: boolean | UserCountOutputTypeCountClustersArgs
    snapshots?: boolean | UserCountOutputTypeCountSnapshotsArgs
    ingestionRuns?: boolean | UserCountOutputTypeCountIngestionRunsArgs
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedSnapshotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIngestionRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestionRunWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type IngestionRunCountOutputType
   */

  export type IngestionRunCountOutputType = {
    articles: number
    clusters: number
    sourceFetches: number
  }

  export type IngestionRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | IngestionRunCountOutputTypeCountArticlesArgs
    clusters?: boolean | IngestionRunCountOutputTypeCountClustersArgs
    sourceFetches?: boolean | IngestionRunCountOutputTypeCountSourceFetchesArgs
  }

  // Custom InputTypes
  /**
   * IngestionRunCountOutputType without action
   */
  export type IngestionRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRunCountOutputType
     */
    select?: IngestionRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngestionRunCountOutputType without action
   */
  export type IngestionRunCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * IngestionRunCountOutputType without action
   */
  export type IngestionRunCountOutputTypeCountClustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterWhereInput
  }

  /**
   * IngestionRunCountOutputType without action
   */
  export type IngestionRunCountOutputTypeCountSourceFetchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceFetchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    rankingScore: number | null
  }

  export type ArticleSumAggregateOutputType = {
    rankingScore: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lastIngestionRunId: string | null
    sourceName: string | null
    sourceUrl: string | null
    title: string | null
    url: string | null
    canonicalUrl: string | null
    publishedAt: Date | null
    fetchedAt: Date | null
    author: string | null
    summary: string | null
    contentSnippet: string | null
    imageUrl: string | null
    topicCandidates: string | null
    hashTitle: string | null
    hashContent: string | null
    rankingScore: number | null
    changeStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lastIngestionRunId: string | null
    sourceName: string | null
    sourceUrl: string | null
    title: string | null
    url: string | null
    canonicalUrl: string | null
    publishedAt: Date | null
    fetchedAt: Date | null
    author: string | null
    summary: string | null
    contentSnippet: string | null
    imageUrl: string | null
    topicCandidates: string | null
    hashTitle: string | null
    hashContent: string | null
    rankingScore: number | null
    changeStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    userId: number
    lastIngestionRunId: number
    sourceName: number
    sourceUrl: number
    title: number
    url: number
    canonicalUrl: number
    publishedAt: number
    fetchedAt: number
    author: number
    summary: number
    contentSnippet: number
    imageUrl: number
    topicCandidates: number
    hashTitle: number
    hashContent: number
    rankingScore: number
    changeStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    rankingScore?: true
  }

  export type ArticleSumAggregateInputType = {
    rankingScore?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    userId?: true
    lastIngestionRunId?: true
    sourceName?: true
    sourceUrl?: true
    title?: true
    url?: true
    canonicalUrl?: true
    publishedAt?: true
    fetchedAt?: true
    author?: true
    summary?: true
    contentSnippet?: true
    imageUrl?: true
    topicCandidates?: true
    hashTitle?: true
    hashContent?: true
    rankingScore?: true
    changeStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    userId?: true
    lastIngestionRunId?: true
    sourceName?: true
    sourceUrl?: true
    title?: true
    url?: true
    canonicalUrl?: true
    publishedAt?: true
    fetchedAt?: true
    author?: true
    summary?: true
    contentSnippet?: true
    imageUrl?: true
    topicCandidates?: true
    hashTitle?: true
    hashContent?: true
    rankingScore?: true
    changeStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    userId?: true
    lastIngestionRunId?: true
    sourceName?: true
    sourceUrl?: true
    title?: true
    url?: true
    canonicalUrl?: true
    publishedAt?: true
    fetchedAt?: true
    author?: true
    summary?: true
    contentSnippet?: true
    imageUrl?: true
    topicCandidates?: true
    hashTitle?: true
    hashContent?: true
    rankingScore?: true
    changeStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    userId: string
    lastIngestionRunId: string | null
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl: string | null
    publishedAt: Date | null
    fetchedAt: Date
    author: string | null
    summary: string | null
    contentSnippet: string | null
    imageUrl: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore: number
    changeStatus: string
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    title?: boolean
    url?: boolean
    canonicalUrl?: boolean
    publishedAt?: boolean
    fetchedAt?: boolean
    author?: boolean
    summary?: boolean
    contentSnippet?: boolean
    imageUrl?: boolean
    topicCandidates?: boolean
    hashTitle?: boolean
    hashContent?: boolean
    rankingScore?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Article$lastIngestionRunArgs<ExtArgs>
    clusterLinks?: boolean | Article$clusterLinksArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    title?: boolean
    url?: boolean
    canonicalUrl?: boolean
    publishedAt?: boolean
    fetchedAt?: boolean
    author?: boolean
    summary?: boolean
    contentSnippet?: boolean
    imageUrl?: boolean
    topicCandidates?: boolean
    hashTitle?: boolean
    hashContent?: boolean
    rankingScore?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Article$lastIngestionRunArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    title?: boolean
    url?: boolean
    canonicalUrl?: boolean
    publishedAt?: boolean
    fetchedAt?: boolean
    author?: boolean
    summary?: boolean
    contentSnippet?: boolean
    imageUrl?: boolean
    topicCandidates?: boolean
    hashTitle?: boolean
    hashContent?: boolean
    rankingScore?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Article$lastIngestionRunArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    title?: boolean
    url?: boolean
    canonicalUrl?: boolean
    publishedAt?: boolean
    fetchedAt?: boolean
    author?: boolean
    summary?: boolean
    contentSnippet?: boolean
    imageUrl?: boolean
    topicCandidates?: boolean
    hashTitle?: boolean
    hashContent?: boolean
    rankingScore?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lastIngestionRunId" | "sourceName" | "sourceUrl" | "title" | "url" | "canonicalUrl" | "publishedAt" | "fetchedAt" | "author" | "summary" | "contentSnippet" | "imageUrl" | "topicCandidates" | "hashTitle" | "hashContent" | "rankingScore" | "changeStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Article$lastIngestionRunArgs<ExtArgs>
    clusterLinks?: boolean | Article$clusterLinksArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Article$lastIngestionRunArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Article$lastIngestionRunArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lastIngestionRun: Prisma.$IngestionRunPayload<ExtArgs> | null
      clusterLinks: Prisma.$ClusterArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lastIngestionRunId: string | null
      sourceName: string
      sourceUrl: string
      title: string
      url: string
      canonicalUrl: string | null
      publishedAt: Date | null
      fetchedAt: Date
      author: string | null
      summary: string | null
      contentSnippet: string | null
      imageUrl: string | null
      topicCandidates: string
      hashTitle: string
      hashContent: string
      rankingScore: number
      changeStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastIngestionRun<T extends Article$lastIngestionRunArgs<ExtArgs> = {}>(args?: Subset<T, Article$lastIngestionRunArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clusterLinks<T extends Article$clusterLinksArgs<ExtArgs> = {}>(args?: Subset<T, Article$clusterLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly userId: FieldRef<"Article", 'String'>
    readonly lastIngestionRunId: FieldRef<"Article", 'String'>
    readonly sourceName: FieldRef<"Article", 'String'>
    readonly sourceUrl: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly url: FieldRef<"Article", 'String'>
    readonly canonicalUrl: FieldRef<"Article", 'String'>
    readonly publishedAt: FieldRef<"Article", 'DateTime'>
    readonly fetchedAt: FieldRef<"Article", 'DateTime'>
    readonly author: FieldRef<"Article", 'String'>
    readonly summary: FieldRef<"Article", 'String'>
    readonly contentSnippet: FieldRef<"Article", 'String'>
    readonly imageUrl: FieldRef<"Article", 'String'>
    readonly topicCandidates: FieldRef<"Article", 'String'>
    readonly hashTitle: FieldRef<"Article", 'String'>
    readonly hashContent: FieldRef<"Article", 'String'>
    readonly rankingScore: FieldRef<"Article", 'Float'>
    readonly changeStatus: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.lastIngestionRun
   */
  export type Article$lastIngestionRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    where?: IngestionRunWhereInput
  }

  /**
   * Article.clusterLinks
   */
  export type Article$clusterLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    where?: ClusterArticleWhereInput
    orderBy?: ClusterArticleOrderByWithRelationInput | ClusterArticleOrderByWithRelationInput[]
    cursor?: ClusterArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClusterArticleScalarFieldEnum | ClusterArticleScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Cluster
   */

  export type AggregateCluster = {
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  export type ClusterAvgAggregateOutputType = {
    score: number | null
    sourceWeight: number | null
    novelty: number | null
    freshness: number | null
    topicRelevance: number | null
  }

  export type ClusterSumAggregateOutputType = {
    score: number | null
    sourceWeight: number | null
    novelty: number | null
    freshness: number | null
    topicRelevance: number | null
  }

  export type ClusterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lastIngestionRunId: string | null
    key: string | null
    contentFingerprint: string | null
    headline: string | null
    summary: string | null
    whyItMatters: string | null
    whyRelevant: string | null
    summarySource: string | null
    summaryModel: string | null
    tags: string | null
    representativeTitle: string | null
    representativeUrl: string | null
    score: number | null
    sourceWeight: number | null
    novelty: number | null
    freshness: number | null
    topicRelevance: number | null
    changeStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClusterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lastIngestionRunId: string | null
    key: string | null
    contentFingerprint: string | null
    headline: string | null
    summary: string | null
    whyItMatters: string | null
    whyRelevant: string | null
    summarySource: string | null
    summaryModel: string | null
    tags: string | null
    representativeTitle: string | null
    representativeUrl: string | null
    score: number | null
    sourceWeight: number | null
    novelty: number | null
    freshness: number | null
    topicRelevance: number | null
    changeStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClusterCountAggregateOutputType = {
    id: number
    userId: number
    lastIngestionRunId: number
    key: number
    contentFingerprint: number
    headline: number
    summary: number
    whyItMatters: number
    whyRelevant: number
    summarySource: number
    summaryModel: number
    tags: number
    representativeTitle: number
    representativeUrl: number
    score: number
    sourceWeight: number
    novelty: number
    freshness: number
    topicRelevance: number
    changeStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClusterAvgAggregateInputType = {
    score?: true
    sourceWeight?: true
    novelty?: true
    freshness?: true
    topicRelevance?: true
  }

  export type ClusterSumAggregateInputType = {
    score?: true
    sourceWeight?: true
    novelty?: true
    freshness?: true
    topicRelevance?: true
  }

  export type ClusterMinAggregateInputType = {
    id?: true
    userId?: true
    lastIngestionRunId?: true
    key?: true
    contentFingerprint?: true
    headline?: true
    summary?: true
    whyItMatters?: true
    whyRelevant?: true
    summarySource?: true
    summaryModel?: true
    tags?: true
    representativeTitle?: true
    representativeUrl?: true
    score?: true
    sourceWeight?: true
    novelty?: true
    freshness?: true
    topicRelevance?: true
    changeStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClusterMaxAggregateInputType = {
    id?: true
    userId?: true
    lastIngestionRunId?: true
    key?: true
    contentFingerprint?: true
    headline?: true
    summary?: true
    whyItMatters?: true
    whyRelevant?: true
    summarySource?: true
    summaryModel?: true
    tags?: true
    representativeTitle?: true
    representativeUrl?: true
    score?: true
    sourceWeight?: true
    novelty?: true
    freshness?: true
    topicRelevance?: true
    changeStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClusterCountAggregateInputType = {
    id?: true
    userId?: true
    lastIngestionRunId?: true
    key?: true
    contentFingerprint?: true
    headline?: true
    summary?: true
    whyItMatters?: true
    whyRelevant?: true
    summarySource?: true
    summaryModel?: true
    tags?: true
    representativeTitle?: true
    representativeUrl?: true
    score?: true
    sourceWeight?: true
    novelty?: true
    freshness?: true
    topicRelevance?: true
    changeStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClusterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cluster to aggregate.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clusters
    **/
    _count?: true | ClusterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClusterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClusterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterMaxAggregateInputType
  }

  export type GetClusterAggregateType<T extends ClusterAggregateArgs> = {
        [P in keyof T & keyof AggregateCluster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCluster[P]>
      : GetScalarType<T[P], AggregateCluster[P]>
  }




  export type ClusterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterWhereInput
    orderBy?: ClusterOrderByWithAggregationInput | ClusterOrderByWithAggregationInput[]
    by: ClusterScalarFieldEnum[] | ClusterScalarFieldEnum
    having?: ClusterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterCountAggregateInputType | true
    _avg?: ClusterAvgAggregateInputType
    _sum?: ClusterSumAggregateInputType
    _min?: ClusterMinAggregateInputType
    _max?: ClusterMaxAggregateInputType
  }

  export type ClusterGroupByOutputType = {
    id: string
    userId: string
    lastIngestionRunId: string | null
    key: string
    contentFingerprint: string | null
    headline: string | null
    summary: string | null
    whyItMatters: string | null
    whyRelevant: string | null
    summarySource: string
    summaryModel: string | null
    tags: string
    representativeTitle: string | null
    representativeUrl: string | null
    score: number
    sourceWeight: number
    novelty: number
    freshness: number
    topicRelevance: number
    changeStatus: string
    createdAt: Date
    updatedAt: Date
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  type GetClusterGroupByPayload<T extends ClusterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterGroupByOutputType[P]>
        }
      >
    >


  export type ClusterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    key?: boolean
    contentFingerprint?: boolean
    headline?: boolean
    summary?: boolean
    whyItMatters?: boolean
    whyRelevant?: boolean
    summarySource?: boolean
    summaryModel?: boolean
    tags?: boolean
    representativeTitle?: boolean
    representativeUrl?: boolean
    score?: boolean
    sourceWeight?: boolean
    novelty?: boolean
    freshness?: boolean
    topicRelevance?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Cluster$lastIngestionRunArgs<ExtArgs>
    articles?: boolean | Cluster$articlesArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    key?: boolean
    contentFingerprint?: boolean
    headline?: boolean
    summary?: boolean
    whyItMatters?: boolean
    whyRelevant?: boolean
    summarySource?: boolean
    summaryModel?: boolean
    tags?: boolean
    representativeTitle?: boolean
    representativeUrl?: boolean
    score?: boolean
    sourceWeight?: boolean
    novelty?: boolean
    freshness?: boolean
    topicRelevance?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Cluster$lastIngestionRunArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    key?: boolean
    contentFingerprint?: boolean
    headline?: boolean
    summary?: boolean
    whyItMatters?: boolean
    whyRelevant?: boolean
    summarySource?: boolean
    summaryModel?: boolean
    tags?: boolean
    representativeTitle?: boolean
    representativeUrl?: boolean
    score?: boolean
    sourceWeight?: boolean
    novelty?: boolean
    freshness?: boolean
    topicRelevance?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Cluster$lastIngestionRunArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectScalar = {
    id?: boolean
    userId?: boolean
    lastIngestionRunId?: boolean
    key?: boolean
    contentFingerprint?: boolean
    headline?: boolean
    summary?: boolean
    whyItMatters?: boolean
    whyRelevant?: boolean
    summarySource?: boolean
    summaryModel?: boolean
    tags?: boolean
    representativeTitle?: boolean
    representativeUrl?: boolean
    score?: boolean
    sourceWeight?: boolean
    novelty?: boolean
    freshness?: boolean
    topicRelevance?: boolean
    changeStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClusterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lastIngestionRunId" | "key" | "contentFingerprint" | "headline" | "summary" | "whyItMatters" | "whyRelevant" | "summarySource" | "summaryModel" | "tags" | "representativeTitle" | "representativeUrl" | "score" | "sourceWeight" | "novelty" | "freshness" | "topicRelevance" | "changeStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["cluster"]>
  export type ClusterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Cluster$lastIngestionRunArgs<ExtArgs>
    articles?: boolean | Cluster$articlesArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClusterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Cluster$lastIngestionRunArgs<ExtArgs>
  }
  export type ClusterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lastIngestionRun?: boolean | Cluster$lastIngestionRunArgs<ExtArgs>
  }

  export type $ClusterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cluster"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lastIngestionRun: Prisma.$IngestionRunPayload<ExtArgs> | null
      articles: Prisma.$ClusterArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lastIngestionRunId: string | null
      key: string
      contentFingerprint: string | null
      headline: string | null
      summary: string | null
      whyItMatters: string | null
      whyRelevant: string | null
      summarySource: string
      summaryModel: string | null
      tags: string
      representativeTitle: string | null
      representativeUrl: string | null
      score: number
      sourceWeight: number
      novelty: number
      freshness: number
      topicRelevance: number
      changeStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cluster"]>
    composites: {}
  }

  type ClusterGetPayload<S extends boolean | null | undefined | ClusterDefaultArgs> = $Result.GetResult<Prisma.$ClusterPayload, S>

  type ClusterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClusterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClusterCountAggregateInputType | true
    }

  export interface ClusterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cluster'], meta: { name: 'Cluster' } }
    /**
     * Find zero or one Cluster that matches the filter.
     * @param {ClusterFindUniqueArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClusterFindUniqueArgs>(args: SelectSubset<T, ClusterFindUniqueArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cluster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClusterFindUniqueOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClusterFindUniqueOrThrowArgs>(args: SelectSubset<T, ClusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClusterFindFirstArgs>(args?: SelectSubset<T, ClusterFindFirstArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClusterFindFirstOrThrowArgs>(args?: SelectSubset<T, ClusterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clusters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clusters
     * const clusters = await prisma.cluster.findMany()
     * 
     * // Get first 10 Clusters
     * const clusters = await prisma.cluster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clusterWithIdOnly = await prisma.cluster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClusterFindManyArgs>(args?: SelectSubset<T, ClusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cluster.
     * @param {ClusterCreateArgs} args - Arguments to create a Cluster.
     * @example
     * // Create one Cluster
     * const Cluster = await prisma.cluster.create({
     *   data: {
     *     // ... data to create a Cluster
     *   }
     * })
     * 
     */
    create<T extends ClusterCreateArgs>(args: SelectSubset<T, ClusterCreateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clusters.
     * @param {ClusterCreateManyArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClusterCreateManyArgs>(args?: SelectSubset<T, ClusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clusters and returns the data saved in the database.
     * @param {ClusterCreateManyAndReturnArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClusterCreateManyAndReturnArgs>(args?: SelectSubset<T, ClusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cluster.
     * @param {ClusterDeleteArgs} args - Arguments to delete one Cluster.
     * @example
     * // Delete one Cluster
     * const Cluster = await prisma.cluster.delete({
     *   where: {
     *     // ... filter to delete one Cluster
     *   }
     * })
     * 
     */
    delete<T extends ClusterDeleteArgs>(args: SelectSubset<T, ClusterDeleteArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cluster.
     * @param {ClusterUpdateArgs} args - Arguments to update one Cluster.
     * @example
     * // Update one Cluster
     * const cluster = await prisma.cluster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClusterUpdateArgs>(args: SelectSubset<T, ClusterUpdateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clusters.
     * @param {ClusterDeleteManyArgs} args - Arguments to filter Clusters to delete.
     * @example
     * // Delete a few Clusters
     * const { count } = await prisma.cluster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClusterDeleteManyArgs>(args?: SelectSubset<T, ClusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClusterUpdateManyArgs>(args: SelectSubset<T, ClusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters and returns the data updated in the database.
     * @param {ClusterUpdateManyAndReturnArgs} args - Arguments to update many Clusters.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClusterUpdateManyAndReturnArgs>(args: SelectSubset<T, ClusterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cluster.
     * @param {ClusterUpsertArgs} args - Arguments to update or create a Cluster.
     * @example
     * // Update or create a Cluster
     * const cluster = await prisma.cluster.upsert({
     *   create: {
     *     // ... data to create a Cluster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cluster we want to update
     *   }
     * })
     */
    upsert<T extends ClusterUpsertArgs>(args: SelectSubset<T, ClusterUpsertArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterCountArgs} args - Arguments to filter Clusters to count.
     * @example
     * // Count the number of Clusters
     * const count = await prisma.cluster.count({
     *   where: {
     *     // ... the filter for the Clusters we want to count
     *   }
     * })
    **/
    count<T extends ClusterCountArgs>(
      args?: Subset<T, ClusterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClusterAggregateArgs>(args: Subset<T, ClusterAggregateArgs>): Prisma.PrismaPromise<GetClusterAggregateType<T>>

    /**
     * Group by Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterGroupByArgs} args - Group by arguments.
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
      T extends ClusterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClusterGroupByArgs['orderBy'] }
        : { orderBy?: ClusterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cluster model
   */
  readonly fields: ClusterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cluster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClusterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastIngestionRun<T extends Cluster$lastIngestionRunArgs<ExtArgs> = {}>(args?: Subset<T, Cluster$lastIngestionRunArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    articles<T extends Cluster$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Cluster$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cluster model
   */
  interface ClusterFieldRefs {
    readonly id: FieldRef<"Cluster", 'String'>
    readonly userId: FieldRef<"Cluster", 'String'>
    readonly lastIngestionRunId: FieldRef<"Cluster", 'String'>
    readonly key: FieldRef<"Cluster", 'String'>
    readonly contentFingerprint: FieldRef<"Cluster", 'String'>
    readonly headline: FieldRef<"Cluster", 'String'>
    readonly summary: FieldRef<"Cluster", 'String'>
    readonly whyItMatters: FieldRef<"Cluster", 'String'>
    readonly whyRelevant: FieldRef<"Cluster", 'String'>
    readonly summarySource: FieldRef<"Cluster", 'String'>
    readonly summaryModel: FieldRef<"Cluster", 'String'>
    readonly tags: FieldRef<"Cluster", 'String'>
    readonly representativeTitle: FieldRef<"Cluster", 'String'>
    readonly representativeUrl: FieldRef<"Cluster", 'String'>
    readonly score: FieldRef<"Cluster", 'Float'>
    readonly sourceWeight: FieldRef<"Cluster", 'Float'>
    readonly novelty: FieldRef<"Cluster", 'Float'>
    readonly freshness: FieldRef<"Cluster", 'Float'>
    readonly topicRelevance: FieldRef<"Cluster", 'Float'>
    readonly changeStatus: FieldRef<"Cluster", 'String'>
    readonly createdAt: FieldRef<"Cluster", 'DateTime'>
    readonly updatedAt: FieldRef<"Cluster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cluster findUnique
   */
  export type ClusterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findUniqueOrThrow
   */
  export type ClusterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findFirst
   */
  export type ClusterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findFirstOrThrow
   */
  export type ClusterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findMany
   */
  export type ClusterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Clusters to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster create
   */
  export type ClusterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to create a Cluster.
     */
    data: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
  }

  /**
   * Cluster createMany
   */
  export type ClusterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster createManyAndReturn
   */
  export type ClusterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cluster update
   */
  export type ClusterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to update a Cluster.
     */
    data: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
    /**
     * Choose, which Cluster to update.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster updateMany
   */
  export type ClusterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
  }

  /**
   * Cluster updateManyAndReturn
   */
  export type ClusterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cluster upsert
   */
  export type ClusterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The filter to search for the Cluster to update in case it exists.
     */
    where: ClusterWhereUniqueInput
    /**
     * In case the Cluster found by the `where` argument doesn't exist, create a new Cluster with this data.
     */
    create: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
    /**
     * In case the Cluster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
  }

  /**
   * Cluster delete
   */
  export type ClusterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter which Cluster to delete.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster deleteMany
   */
  export type ClusterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clusters to delete
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to delete.
     */
    limit?: number
  }

  /**
   * Cluster.lastIngestionRun
   */
  export type Cluster$lastIngestionRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    where?: IngestionRunWhereInput
  }

  /**
   * Cluster.articles
   */
  export type Cluster$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    where?: ClusterArticleWhereInput
    orderBy?: ClusterArticleOrderByWithRelationInput | ClusterArticleOrderByWithRelationInput[]
    cursor?: ClusterArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClusterArticleScalarFieldEnum | ClusterArticleScalarFieldEnum[]
  }

  /**
   * Cluster without action
   */
  export type ClusterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
  }


  /**
   * Model ClusterArticle
   */

  export type AggregateClusterArticle = {
    _count: ClusterArticleCountAggregateOutputType | null
    _avg: ClusterArticleAvgAggregateOutputType | null
    _sum: ClusterArticleSumAggregateOutputType | null
    _min: ClusterArticleMinAggregateOutputType | null
    _max: ClusterArticleMaxAggregateOutputType | null
  }

  export type ClusterArticleAvgAggregateOutputType = {
    position: number | null
  }

  export type ClusterArticleSumAggregateOutputType = {
    position: number | null
  }

  export type ClusterArticleMinAggregateOutputType = {
    clusterId: string | null
    articleId: string | null
    position: number | null
  }

  export type ClusterArticleMaxAggregateOutputType = {
    clusterId: string | null
    articleId: string | null
    position: number | null
  }

  export type ClusterArticleCountAggregateOutputType = {
    clusterId: number
    articleId: number
    position: number
    _all: number
  }


  export type ClusterArticleAvgAggregateInputType = {
    position?: true
  }

  export type ClusterArticleSumAggregateInputType = {
    position?: true
  }

  export type ClusterArticleMinAggregateInputType = {
    clusterId?: true
    articleId?: true
    position?: true
  }

  export type ClusterArticleMaxAggregateInputType = {
    clusterId?: true
    articleId?: true
    position?: true
  }

  export type ClusterArticleCountAggregateInputType = {
    clusterId?: true
    articleId?: true
    position?: true
    _all?: true
  }

  export type ClusterArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClusterArticle to aggregate.
     */
    where?: ClusterArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClusterArticles to fetch.
     */
    orderBy?: ClusterArticleOrderByWithRelationInput | ClusterArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClusterArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClusterArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClusterArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClusterArticles
    **/
    _count?: true | ClusterArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClusterArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClusterArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterArticleMaxAggregateInputType
  }

  export type GetClusterArticleAggregateType<T extends ClusterArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateClusterArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClusterArticle[P]>
      : GetScalarType<T[P], AggregateClusterArticle[P]>
  }




  export type ClusterArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterArticleWhereInput
    orderBy?: ClusterArticleOrderByWithAggregationInput | ClusterArticleOrderByWithAggregationInput[]
    by: ClusterArticleScalarFieldEnum[] | ClusterArticleScalarFieldEnum
    having?: ClusterArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterArticleCountAggregateInputType | true
    _avg?: ClusterArticleAvgAggregateInputType
    _sum?: ClusterArticleSumAggregateInputType
    _min?: ClusterArticleMinAggregateInputType
    _max?: ClusterArticleMaxAggregateInputType
  }

  export type ClusterArticleGroupByOutputType = {
    clusterId: string
    articleId: string
    position: number
    _count: ClusterArticleCountAggregateOutputType | null
    _avg: ClusterArticleAvgAggregateOutputType | null
    _sum: ClusterArticleSumAggregateOutputType | null
    _min: ClusterArticleMinAggregateOutputType | null
    _max: ClusterArticleMaxAggregateOutputType | null
  }

  type GetClusterArticleGroupByPayload<T extends ClusterArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterArticleGroupByOutputType[P]>
        }
      >
    >


  export type ClusterArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clusterId?: boolean
    articleId?: boolean
    position?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clusterArticle"]>

  export type ClusterArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clusterId?: boolean
    articleId?: boolean
    position?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clusterArticle"]>

  export type ClusterArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clusterId?: boolean
    articleId?: boolean
    position?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clusterArticle"]>

  export type ClusterArticleSelectScalar = {
    clusterId?: boolean
    articleId?: boolean
    position?: boolean
  }

  export type ClusterArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clusterId" | "articleId" | "position", ExtArgs["result"]["clusterArticle"]>
  export type ClusterArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ClusterArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ClusterArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $ClusterArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClusterArticle"
    objects: {
      cluster: Prisma.$ClusterPayload<ExtArgs>
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      clusterId: string
      articleId: string
      position: number
    }, ExtArgs["result"]["clusterArticle"]>
    composites: {}
  }

  type ClusterArticleGetPayload<S extends boolean | null | undefined | ClusterArticleDefaultArgs> = $Result.GetResult<Prisma.$ClusterArticlePayload, S>

  type ClusterArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClusterArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClusterArticleCountAggregateInputType | true
    }

  export interface ClusterArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClusterArticle'], meta: { name: 'ClusterArticle' } }
    /**
     * Find zero or one ClusterArticle that matches the filter.
     * @param {ClusterArticleFindUniqueArgs} args - Arguments to find a ClusterArticle
     * @example
     * // Get one ClusterArticle
     * const clusterArticle = await prisma.clusterArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClusterArticleFindUniqueArgs>(args: SelectSubset<T, ClusterArticleFindUniqueArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClusterArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClusterArticleFindUniqueOrThrowArgs} args - Arguments to find a ClusterArticle
     * @example
     * // Get one ClusterArticle
     * const clusterArticle = await prisma.clusterArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClusterArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ClusterArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClusterArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterArticleFindFirstArgs} args - Arguments to find a ClusterArticle
     * @example
     * // Get one ClusterArticle
     * const clusterArticle = await prisma.clusterArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClusterArticleFindFirstArgs>(args?: SelectSubset<T, ClusterArticleFindFirstArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClusterArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterArticleFindFirstOrThrowArgs} args - Arguments to find a ClusterArticle
     * @example
     * // Get one ClusterArticle
     * const clusterArticle = await prisma.clusterArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClusterArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ClusterArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClusterArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClusterArticles
     * const clusterArticles = await prisma.clusterArticle.findMany()
     * 
     * // Get first 10 ClusterArticles
     * const clusterArticles = await prisma.clusterArticle.findMany({ take: 10 })
     * 
     * // Only select the `clusterId`
     * const clusterArticleWithClusterIdOnly = await prisma.clusterArticle.findMany({ select: { clusterId: true } })
     * 
     */
    findMany<T extends ClusterArticleFindManyArgs>(args?: SelectSubset<T, ClusterArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClusterArticle.
     * @param {ClusterArticleCreateArgs} args - Arguments to create a ClusterArticle.
     * @example
     * // Create one ClusterArticle
     * const ClusterArticle = await prisma.clusterArticle.create({
     *   data: {
     *     // ... data to create a ClusterArticle
     *   }
     * })
     * 
     */
    create<T extends ClusterArticleCreateArgs>(args: SelectSubset<T, ClusterArticleCreateArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClusterArticles.
     * @param {ClusterArticleCreateManyArgs} args - Arguments to create many ClusterArticles.
     * @example
     * // Create many ClusterArticles
     * const clusterArticle = await prisma.clusterArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClusterArticleCreateManyArgs>(args?: SelectSubset<T, ClusterArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClusterArticles and returns the data saved in the database.
     * @param {ClusterArticleCreateManyAndReturnArgs} args - Arguments to create many ClusterArticles.
     * @example
     * // Create many ClusterArticles
     * const clusterArticle = await prisma.clusterArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClusterArticles and only return the `clusterId`
     * const clusterArticleWithClusterIdOnly = await prisma.clusterArticle.createManyAndReturn({
     *   select: { clusterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClusterArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ClusterArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClusterArticle.
     * @param {ClusterArticleDeleteArgs} args - Arguments to delete one ClusterArticle.
     * @example
     * // Delete one ClusterArticle
     * const ClusterArticle = await prisma.clusterArticle.delete({
     *   where: {
     *     // ... filter to delete one ClusterArticle
     *   }
     * })
     * 
     */
    delete<T extends ClusterArticleDeleteArgs>(args: SelectSubset<T, ClusterArticleDeleteArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClusterArticle.
     * @param {ClusterArticleUpdateArgs} args - Arguments to update one ClusterArticle.
     * @example
     * // Update one ClusterArticle
     * const clusterArticle = await prisma.clusterArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClusterArticleUpdateArgs>(args: SelectSubset<T, ClusterArticleUpdateArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClusterArticles.
     * @param {ClusterArticleDeleteManyArgs} args - Arguments to filter ClusterArticles to delete.
     * @example
     * // Delete a few ClusterArticles
     * const { count } = await prisma.clusterArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClusterArticleDeleteManyArgs>(args?: SelectSubset<T, ClusterArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClusterArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClusterArticles
     * const clusterArticle = await prisma.clusterArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClusterArticleUpdateManyArgs>(args: SelectSubset<T, ClusterArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClusterArticles and returns the data updated in the database.
     * @param {ClusterArticleUpdateManyAndReturnArgs} args - Arguments to update many ClusterArticles.
     * @example
     * // Update many ClusterArticles
     * const clusterArticle = await prisma.clusterArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClusterArticles and only return the `clusterId`
     * const clusterArticleWithClusterIdOnly = await prisma.clusterArticle.updateManyAndReturn({
     *   select: { clusterId: true },
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
    updateManyAndReturn<T extends ClusterArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ClusterArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClusterArticle.
     * @param {ClusterArticleUpsertArgs} args - Arguments to update or create a ClusterArticle.
     * @example
     * // Update or create a ClusterArticle
     * const clusterArticle = await prisma.clusterArticle.upsert({
     *   create: {
     *     // ... data to create a ClusterArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClusterArticle we want to update
     *   }
     * })
     */
    upsert<T extends ClusterArticleUpsertArgs>(args: SelectSubset<T, ClusterArticleUpsertArgs<ExtArgs>>): Prisma__ClusterArticleClient<$Result.GetResult<Prisma.$ClusterArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClusterArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterArticleCountArgs} args - Arguments to filter ClusterArticles to count.
     * @example
     * // Count the number of ClusterArticles
     * const count = await prisma.clusterArticle.count({
     *   where: {
     *     // ... the filter for the ClusterArticles we want to count
     *   }
     * })
    **/
    count<T extends ClusterArticleCountArgs>(
      args?: Subset<T, ClusterArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClusterArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClusterArticleAggregateArgs>(args: Subset<T, ClusterArticleAggregateArgs>): Prisma.PrismaPromise<GetClusterArticleAggregateType<T>>

    /**
     * Group by ClusterArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterArticleGroupByArgs} args - Group by arguments.
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
      T extends ClusterArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClusterArticleGroupByArgs['orderBy'] }
        : { orderBy?: ClusterArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClusterArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClusterArticle model
   */
  readonly fields: ClusterArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClusterArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClusterArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cluster<T extends ClusterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClusterDefaultArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClusterArticle model
   */
  interface ClusterArticleFieldRefs {
    readonly clusterId: FieldRef<"ClusterArticle", 'String'>
    readonly articleId: FieldRef<"ClusterArticle", 'String'>
    readonly position: FieldRef<"ClusterArticle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClusterArticle findUnique
   */
  export type ClusterArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * Filter, which ClusterArticle to fetch.
     */
    where: ClusterArticleWhereUniqueInput
  }

  /**
   * ClusterArticle findUniqueOrThrow
   */
  export type ClusterArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * Filter, which ClusterArticle to fetch.
     */
    where: ClusterArticleWhereUniqueInput
  }

  /**
   * ClusterArticle findFirst
   */
  export type ClusterArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * Filter, which ClusterArticle to fetch.
     */
    where?: ClusterArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClusterArticles to fetch.
     */
    orderBy?: ClusterArticleOrderByWithRelationInput | ClusterArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClusterArticles.
     */
    cursor?: ClusterArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClusterArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClusterArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClusterArticles.
     */
    distinct?: ClusterArticleScalarFieldEnum | ClusterArticleScalarFieldEnum[]
  }

  /**
   * ClusterArticle findFirstOrThrow
   */
  export type ClusterArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * Filter, which ClusterArticle to fetch.
     */
    where?: ClusterArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClusterArticles to fetch.
     */
    orderBy?: ClusterArticleOrderByWithRelationInput | ClusterArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClusterArticles.
     */
    cursor?: ClusterArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClusterArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClusterArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClusterArticles.
     */
    distinct?: ClusterArticleScalarFieldEnum | ClusterArticleScalarFieldEnum[]
  }

  /**
   * ClusterArticle findMany
   */
  export type ClusterArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * Filter, which ClusterArticles to fetch.
     */
    where?: ClusterArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClusterArticles to fetch.
     */
    orderBy?: ClusterArticleOrderByWithRelationInput | ClusterArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClusterArticles.
     */
    cursor?: ClusterArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClusterArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClusterArticles.
     */
    skip?: number
    distinct?: ClusterArticleScalarFieldEnum | ClusterArticleScalarFieldEnum[]
  }

  /**
   * ClusterArticle create
   */
  export type ClusterArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a ClusterArticle.
     */
    data: XOR<ClusterArticleCreateInput, ClusterArticleUncheckedCreateInput>
  }

  /**
   * ClusterArticle createMany
   */
  export type ClusterArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClusterArticles.
     */
    data: ClusterArticleCreateManyInput | ClusterArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClusterArticle createManyAndReturn
   */
  export type ClusterArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * The data used to create many ClusterArticles.
     */
    data: ClusterArticleCreateManyInput | ClusterArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClusterArticle update
   */
  export type ClusterArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a ClusterArticle.
     */
    data: XOR<ClusterArticleUpdateInput, ClusterArticleUncheckedUpdateInput>
    /**
     * Choose, which ClusterArticle to update.
     */
    where: ClusterArticleWhereUniqueInput
  }

  /**
   * ClusterArticle updateMany
   */
  export type ClusterArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClusterArticles.
     */
    data: XOR<ClusterArticleUpdateManyMutationInput, ClusterArticleUncheckedUpdateManyInput>
    /**
     * Filter which ClusterArticles to update
     */
    where?: ClusterArticleWhereInput
    /**
     * Limit how many ClusterArticles to update.
     */
    limit?: number
  }

  /**
   * ClusterArticle updateManyAndReturn
   */
  export type ClusterArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * The data used to update ClusterArticles.
     */
    data: XOR<ClusterArticleUpdateManyMutationInput, ClusterArticleUncheckedUpdateManyInput>
    /**
     * Filter which ClusterArticles to update
     */
    where?: ClusterArticleWhereInput
    /**
     * Limit how many ClusterArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClusterArticle upsert
   */
  export type ClusterArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the ClusterArticle to update in case it exists.
     */
    where: ClusterArticleWhereUniqueInput
    /**
     * In case the ClusterArticle found by the `where` argument doesn't exist, create a new ClusterArticle with this data.
     */
    create: XOR<ClusterArticleCreateInput, ClusterArticleUncheckedCreateInput>
    /**
     * In case the ClusterArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClusterArticleUpdateInput, ClusterArticleUncheckedUpdateInput>
  }

  /**
   * ClusterArticle delete
   */
  export type ClusterArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
    /**
     * Filter which ClusterArticle to delete.
     */
    where: ClusterArticleWhereUniqueInput
  }

  /**
   * ClusterArticle deleteMany
   */
  export type ClusterArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClusterArticles to delete
     */
    where?: ClusterArticleWhereInput
    /**
     * Limit how many ClusterArticles to delete.
     */
    limit?: number
  }

  /**
   * ClusterArticle without action
   */
  export type ClusterArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterArticle
     */
    select?: ClusterArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClusterArticle
     */
    omit?: ClusterArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterArticleInclude<ExtArgs> | null
  }


  /**
   * Model Preference
   */

  export type AggregatePreference = {
    _count: PreferenceCountAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  export type PreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    topics: string | null
    mutedTopics: string | null
    tone: string | null
    useRemoteRss: boolean | null
    useOpenAiSummaries: boolean | null
    sourceWeights: string | null
    rankingWeights: string | null
    updatedAt: Date | null
  }

  export type PreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    topics: string | null
    mutedTopics: string | null
    tone: string | null
    useRemoteRss: boolean | null
    useOpenAiSummaries: boolean | null
    sourceWeights: string | null
    rankingWeights: string | null
    updatedAt: Date | null
  }

  export type PreferenceCountAggregateOutputType = {
    id: number
    userId: number
    topics: number
    mutedTopics: number
    tone: number
    useRemoteRss: number
    useOpenAiSummaries: number
    sourceWeights: number
    rankingWeights: number
    updatedAt: number
    _all: number
  }


  export type PreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    topics?: true
    mutedTopics?: true
    tone?: true
    useRemoteRss?: true
    useOpenAiSummaries?: true
    sourceWeights?: true
    rankingWeights?: true
    updatedAt?: true
  }

  export type PreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    topics?: true
    mutedTopics?: true
    tone?: true
    useRemoteRss?: true
    useOpenAiSummaries?: true
    sourceWeights?: true
    rankingWeights?: true
    updatedAt?: true
  }

  export type PreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    topics?: true
    mutedTopics?: true
    tone?: true
    useRemoteRss?: true
    useOpenAiSummaries?: true
    sourceWeights?: true
    rankingWeights?: true
    updatedAt?: true
    _all?: true
  }

  export type PreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preference to aggregate.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferenceMaxAggregateInputType
  }

  export type GetPreferenceAggregateType<T extends PreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreference[P]>
      : GetScalarType<T[P], AggregatePreference[P]>
  }




  export type PreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferenceWhereInput
    orderBy?: PreferenceOrderByWithAggregationInput | PreferenceOrderByWithAggregationInput[]
    by: PreferenceScalarFieldEnum[] | PreferenceScalarFieldEnum
    having?: PreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferenceCountAggregateInputType | true
    _min?: PreferenceMinAggregateInputType
    _max?: PreferenceMaxAggregateInputType
  }

  export type PreferenceGroupByOutputType = {
    id: string
    userId: string
    topics: string
    mutedTopics: string
    tone: string
    useRemoteRss: boolean
    useOpenAiSummaries: boolean
    sourceWeights: string
    rankingWeights: string
    updatedAt: Date
    _count: PreferenceCountAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  type GetPreferenceGroupByPayload<T extends PreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
        }
      >
    >


  export type PreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topics?: boolean
    mutedTopics?: boolean
    tone?: boolean
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights?: boolean
    rankingWeights?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topics?: boolean
    mutedTopics?: boolean
    tone?: boolean
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights?: boolean
    rankingWeights?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topics?: boolean
    mutedTopics?: boolean
    tone?: boolean
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights?: boolean
    rankingWeights?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    topics?: boolean
    mutedTopics?: boolean
    tone?: boolean
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights?: boolean
    rankingWeights?: boolean
    updatedAt?: boolean
  }

  export type PreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topics" | "mutedTopics" | "tone" | "useRemoteRss" | "useOpenAiSummaries" | "sourceWeights" | "rankingWeights" | "updatedAt", ExtArgs["result"]["preference"]>
  export type PreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      topics: string
      mutedTopics: string
      tone: string
      useRemoteRss: boolean
      useOpenAiSummaries: boolean
      sourceWeights: string
      rankingWeights: string
      updatedAt: Date
    }, ExtArgs["result"]["preference"]>
    composites: {}
  }

  type PreferenceGetPayload<S extends boolean | null | undefined | PreferenceDefaultArgs> = $Result.GetResult<Prisma.$PreferencePayload, S>

  type PreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferenceCountAggregateInputType | true
    }

  export interface PreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preference'], meta: { name: 'Preference' } }
    /**
     * Find zero or one Preference that matches the filter.
     * @param {PreferenceFindUniqueArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferenceFindUniqueArgs>(args: SelectSubset<T, PreferenceFindUniqueArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferenceFindUniqueOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindFirstArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferenceFindFirstArgs>(args?: SelectSubset<T, PreferenceFindFirstArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindFirstOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preference.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferenceWithIdOnly = await prisma.preference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferenceFindManyArgs>(args?: SelectSubset<T, PreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preference.
     * @param {PreferenceCreateArgs} args - Arguments to create a Preference.
     * @example
     * // Create one Preference
     * const Preference = await prisma.preference.create({
     *   data: {
     *     // ... data to create a Preference
     *   }
     * })
     * 
     */
    create<T extends PreferenceCreateArgs>(args: SelectSubset<T, PreferenceCreateArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferenceCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferenceCreateManyArgs>(args?: SelectSubset<T, PreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferenceCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preference.
     * @param {PreferenceDeleteArgs} args - Arguments to delete one Preference.
     * @example
     * // Delete one Preference
     * const Preference = await prisma.preference.delete({
     *   where: {
     *     // ... filter to delete one Preference
     *   }
     * })
     * 
     */
    delete<T extends PreferenceDeleteArgs>(args: SelectSubset<T, PreferenceDeleteArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preference.
     * @param {PreferenceUpdateArgs} args - Arguments to update one Preference.
     * @example
     * // Update one Preference
     * const preference = await prisma.preference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferenceUpdateArgs>(args: SelectSubset<T, PreferenceUpdateArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferenceDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferenceDeleteManyArgs>(args?: SelectSubset<T, PreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferenceUpdateManyArgs>(args: SelectSubset<T, PreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferenceUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preference.
     * @param {PreferenceUpsertArgs} args - Arguments to update or create a Preference.
     * @example
     * // Update or create a Preference
     * const preference = await prisma.preference.upsert({
     *   create: {
     *     // ... data to create a Preference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preference we want to update
     *   }
     * })
     */
    upsert<T extends PreferenceUpsertArgs>(args: SelectSubset<T, PreferenceUpsertArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preference.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferenceCountArgs>(
      args?: Subset<T, PreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferenceAggregateArgs>(args: Subset<T, PreferenceAggregateArgs>): Prisma.PrismaPromise<GetPreferenceAggregateType<T>>

    /**
     * Group by Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceGroupByArgs} args - Group by arguments.
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
      T extends PreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferenceGroupByArgs['orderBy'] }
        : { orderBy?: PreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preference model
   */
  readonly fields: PreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Preference model
   */
  interface PreferenceFieldRefs {
    readonly id: FieldRef<"Preference", 'String'>
    readonly userId: FieldRef<"Preference", 'String'>
    readonly topics: FieldRef<"Preference", 'String'>
    readonly mutedTopics: FieldRef<"Preference", 'String'>
    readonly tone: FieldRef<"Preference", 'String'>
    readonly useRemoteRss: FieldRef<"Preference", 'Boolean'>
    readonly useOpenAiSummaries: FieldRef<"Preference", 'Boolean'>
    readonly sourceWeights: FieldRef<"Preference", 'String'>
    readonly rankingWeights: FieldRef<"Preference", 'String'>
    readonly updatedAt: FieldRef<"Preference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Preference findUnique
   */
  export type PreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference findUniqueOrThrow
   */
  export type PreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference findFirst
   */
  export type PreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference findFirstOrThrow
   */
  export type PreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference findMany
   */
  export type PreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference create
   */
  export type PreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Preference.
     */
    data: XOR<PreferenceCreateInput, PreferenceUncheckedCreateInput>
  }

  /**
   * Preference createMany
   */
  export type PreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferenceCreateManyInput | PreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preference createManyAndReturn
   */
  export type PreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferenceCreateManyInput | PreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preference update
   */
  export type PreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Preference.
     */
    data: XOR<PreferenceUpdateInput, PreferenceUncheckedUpdateInput>
    /**
     * Choose, which Preference to update.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference updateMany
   */
  export type PreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferenceUpdateManyMutationInput, PreferenceUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preference updateManyAndReturn
   */
  export type PreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferenceUpdateManyMutationInput, PreferenceUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preference upsert
   */
  export type PreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Preference to update in case it exists.
     */
    where: PreferenceWhereUniqueInput
    /**
     * In case the Preference found by the `where` argument doesn't exist, create a new Preference with this data.
     */
    create: XOR<PreferenceCreateInput, PreferenceUncheckedCreateInput>
    /**
     * In case the Preference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferenceUpdateInput, PreferenceUncheckedUpdateInput>
  }

  /**
   * Preference delete
   */
  export type PreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter which Preference to delete.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference deleteMany
   */
  export type PreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preference without action
   */
  export type PreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
  }


  /**
   * Model FeedSnapshot
   */

  export type AggregateFeedSnapshot = {
    _count: FeedSnapshotCountAggregateOutputType | null
    _min: FeedSnapshotMinAggregateOutputType | null
    _max: FeedSnapshotMaxAggregateOutputType | null
  }

  export type FeedSnapshotMinAggregateOutputType = {
    id: string | null
    userId: string | null
    snapshotAt: Date | null
    clusterIds: string | null
  }

  export type FeedSnapshotMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    snapshotAt: Date | null
    clusterIds: string | null
  }

  export type FeedSnapshotCountAggregateOutputType = {
    id: number
    userId: number
    snapshotAt: number
    clusterIds: number
    _all: number
  }


  export type FeedSnapshotMinAggregateInputType = {
    id?: true
    userId?: true
    snapshotAt?: true
    clusterIds?: true
  }

  export type FeedSnapshotMaxAggregateInputType = {
    id?: true
    userId?: true
    snapshotAt?: true
    clusterIds?: true
  }

  export type FeedSnapshotCountAggregateInputType = {
    id?: true
    userId?: true
    snapshotAt?: true
    clusterIds?: true
    _all?: true
  }

  export type FeedSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedSnapshot to aggregate.
     */
    where?: FeedSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedSnapshots to fetch.
     */
    orderBy?: FeedSnapshotOrderByWithRelationInput | FeedSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedSnapshots
    **/
    _count?: true | FeedSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedSnapshotMaxAggregateInputType
  }

  export type GetFeedSnapshotAggregateType<T extends FeedSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedSnapshot[P]>
      : GetScalarType<T[P], AggregateFeedSnapshot[P]>
  }




  export type FeedSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedSnapshotWhereInput
    orderBy?: FeedSnapshotOrderByWithAggregationInput | FeedSnapshotOrderByWithAggregationInput[]
    by: FeedSnapshotScalarFieldEnum[] | FeedSnapshotScalarFieldEnum
    having?: FeedSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedSnapshotCountAggregateInputType | true
    _min?: FeedSnapshotMinAggregateInputType
    _max?: FeedSnapshotMaxAggregateInputType
  }

  export type FeedSnapshotGroupByOutputType = {
    id: string
    userId: string
    snapshotAt: Date
    clusterIds: string
    _count: FeedSnapshotCountAggregateOutputType | null
    _min: FeedSnapshotMinAggregateOutputType | null
    _max: FeedSnapshotMaxAggregateOutputType | null
  }

  type GetFeedSnapshotGroupByPayload<T extends FeedSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], FeedSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type FeedSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snapshotAt?: boolean
    clusterIds?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedSnapshot"]>

  export type FeedSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snapshotAt?: boolean
    clusterIds?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedSnapshot"]>

  export type FeedSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snapshotAt?: boolean
    clusterIds?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedSnapshot"]>

  export type FeedSnapshotSelectScalar = {
    id?: boolean
    userId?: boolean
    snapshotAt?: boolean
    clusterIds?: boolean
  }

  export type FeedSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "snapshotAt" | "clusterIds", ExtArgs["result"]["feedSnapshot"]>
  export type FeedSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeedSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedSnapshot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      snapshotAt: Date
      clusterIds: string
    }, ExtArgs["result"]["feedSnapshot"]>
    composites: {}
  }

  type FeedSnapshotGetPayload<S extends boolean | null | undefined | FeedSnapshotDefaultArgs> = $Result.GetResult<Prisma.$FeedSnapshotPayload, S>

  type FeedSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedSnapshotCountAggregateInputType | true
    }

  export interface FeedSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedSnapshot'], meta: { name: 'FeedSnapshot' } }
    /**
     * Find zero or one FeedSnapshot that matches the filter.
     * @param {FeedSnapshotFindUniqueArgs} args - Arguments to find a FeedSnapshot
     * @example
     * // Get one FeedSnapshot
     * const feedSnapshot = await prisma.feedSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedSnapshotFindUniqueArgs>(args: SelectSubset<T, FeedSnapshotFindUniqueArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedSnapshotFindUniqueOrThrowArgs} args - Arguments to find a FeedSnapshot
     * @example
     * // Get one FeedSnapshot
     * const feedSnapshot = await prisma.feedSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedSnapshotFindFirstArgs} args - Arguments to find a FeedSnapshot
     * @example
     * // Get one FeedSnapshot
     * const feedSnapshot = await prisma.feedSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedSnapshotFindFirstArgs>(args?: SelectSubset<T, FeedSnapshotFindFirstArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedSnapshotFindFirstOrThrowArgs} args - Arguments to find a FeedSnapshot
     * @example
     * // Get one FeedSnapshot
     * const feedSnapshot = await prisma.feedSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedSnapshots
     * const feedSnapshots = await prisma.feedSnapshot.findMany()
     * 
     * // Get first 10 FeedSnapshots
     * const feedSnapshots = await prisma.feedSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedSnapshotWithIdOnly = await prisma.feedSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedSnapshotFindManyArgs>(args?: SelectSubset<T, FeedSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedSnapshot.
     * @param {FeedSnapshotCreateArgs} args - Arguments to create a FeedSnapshot.
     * @example
     * // Create one FeedSnapshot
     * const FeedSnapshot = await prisma.feedSnapshot.create({
     *   data: {
     *     // ... data to create a FeedSnapshot
     *   }
     * })
     * 
     */
    create<T extends FeedSnapshotCreateArgs>(args: SelectSubset<T, FeedSnapshotCreateArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedSnapshots.
     * @param {FeedSnapshotCreateManyArgs} args - Arguments to create many FeedSnapshots.
     * @example
     * // Create many FeedSnapshots
     * const feedSnapshot = await prisma.feedSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedSnapshotCreateManyArgs>(args?: SelectSubset<T, FeedSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedSnapshots and returns the data saved in the database.
     * @param {FeedSnapshotCreateManyAndReturnArgs} args - Arguments to create many FeedSnapshots.
     * @example
     * // Create many FeedSnapshots
     * const feedSnapshot = await prisma.feedSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedSnapshots and only return the `id`
     * const feedSnapshotWithIdOnly = await prisma.feedSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedSnapshot.
     * @param {FeedSnapshotDeleteArgs} args - Arguments to delete one FeedSnapshot.
     * @example
     * // Delete one FeedSnapshot
     * const FeedSnapshot = await prisma.feedSnapshot.delete({
     *   where: {
     *     // ... filter to delete one FeedSnapshot
     *   }
     * })
     * 
     */
    delete<T extends FeedSnapshotDeleteArgs>(args: SelectSubset<T, FeedSnapshotDeleteArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedSnapshot.
     * @param {FeedSnapshotUpdateArgs} args - Arguments to update one FeedSnapshot.
     * @example
     * // Update one FeedSnapshot
     * const feedSnapshot = await prisma.feedSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedSnapshotUpdateArgs>(args: SelectSubset<T, FeedSnapshotUpdateArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedSnapshots.
     * @param {FeedSnapshotDeleteManyArgs} args - Arguments to filter FeedSnapshots to delete.
     * @example
     * // Delete a few FeedSnapshots
     * const { count } = await prisma.feedSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedSnapshotDeleteManyArgs>(args?: SelectSubset<T, FeedSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedSnapshots
     * const feedSnapshot = await prisma.feedSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedSnapshotUpdateManyArgs>(args: SelectSubset<T, FeedSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedSnapshots and returns the data updated in the database.
     * @param {FeedSnapshotUpdateManyAndReturnArgs} args - Arguments to update many FeedSnapshots.
     * @example
     * // Update many FeedSnapshots
     * const feedSnapshot = await prisma.feedSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedSnapshots and only return the `id`
     * const feedSnapshotWithIdOnly = await prisma.feedSnapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedSnapshot.
     * @param {FeedSnapshotUpsertArgs} args - Arguments to update or create a FeedSnapshot.
     * @example
     * // Update or create a FeedSnapshot
     * const feedSnapshot = await prisma.feedSnapshot.upsert({
     *   create: {
     *     // ... data to create a FeedSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends FeedSnapshotUpsertArgs>(args: SelectSubset<T, FeedSnapshotUpsertArgs<ExtArgs>>): Prisma__FeedSnapshotClient<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedSnapshotCountArgs} args - Arguments to filter FeedSnapshots to count.
     * @example
     * // Count the number of FeedSnapshots
     * const count = await prisma.feedSnapshot.count({
     *   where: {
     *     // ... the filter for the FeedSnapshots we want to count
     *   }
     * })
    **/
    count<T extends FeedSnapshotCountArgs>(
      args?: Subset<T, FeedSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedSnapshotAggregateArgs>(args: Subset<T, FeedSnapshotAggregateArgs>): Prisma.PrismaPromise<GetFeedSnapshotAggregateType<T>>

    /**
     * Group by FeedSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedSnapshotGroupByArgs} args - Group by arguments.
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
      T extends FeedSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: FeedSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedSnapshot model
   */
  readonly fields: FeedSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FeedSnapshot model
   */
  interface FeedSnapshotFieldRefs {
    readonly id: FieldRef<"FeedSnapshot", 'String'>
    readonly userId: FieldRef<"FeedSnapshot", 'String'>
    readonly snapshotAt: FieldRef<"FeedSnapshot", 'DateTime'>
    readonly clusterIds: FieldRef<"FeedSnapshot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeedSnapshot findUnique
   */
  export type FeedSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which FeedSnapshot to fetch.
     */
    where: FeedSnapshotWhereUniqueInput
  }

  /**
   * FeedSnapshot findUniqueOrThrow
   */
  export type FeedSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which FeedSnapshot to fetch.
     */
    where: FeedSnapshotWhereUniqueInput
  }

  /**
   * FeedSnapshot findFirst
   */
  export type FeedSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which FeedSnapshot to fetch.
     */
    where?: FeedSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedSnapshots to fetch.
     */
    orderBy?: FeedSnapshotOrderByWithRelationInput | FeedSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedSnapshots.
     */
    cursor?: FeedSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedSnapshots.
     */
    distinct?: FeedSnapshotScalarFieldEnum | FeedSnapshotScalarFieldEnum[]
  }

  /**
   * FeedSnapshot findFirstOrThrow
   */
  export type FeedSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which FeedSnapshot to fetch.
     */
    where?: FeedSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedSnapshots to fetch.
     */
    orderBy?: FeedSnapshotOrderByWithRelationInput | FeedSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedSnapshots.
     */
    cursor?: FeedSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedSnapshots.
     */
    distinct?: FeedSnapshotScalarFieldEnum | FeedSnapshotScalarFieldEnum[]
  }

  /**
   * FeedSnapshot findMany
   */
  export type FeedSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which FeedSnapshots to fetch.
     */
    where?: FeedSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedSnapshots to fetch.
     */
    orderBy?: FeedSnapshotOrderByWithRelationInput | FeedSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedSnapshots.
     */
    cursor?: FeedSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedSnapshots.
     */
    skip?: number
    distinct?: FeedSnapshotScalarFieldEnum | FeedSnapshotScalarFieldEnum[]
  }

  /**
   * FeedSnapshot create
   */
  export type FeedSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedSnapshot.
     */
    data: XOR<FeedSnapshotCreateInput, FeedSnapshotUncheckedCreateInput>
  }

  /**
   * FeedSnapshot createMany
   */
  export type FeedSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedSnapshots.
     */
    data: FeedSnapshotCreateManyInput | FeedSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeedSnapshot createManyAndReturn
   */
  export type FeedSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many FeedSnapshots.
     */
    data: FeedSnapshotCreateManyInput | FeedSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedSnapshot update
   */
  export type FeedSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedSnapshot.
     */
    data: XOR<FeedSnapshotUpdateInput, FeedSnapshotUncheckedUpdateInput>
    /**
     * Choose, which FeedSnapshot to update.
     */
    where: FeedSnapshotWhereUniqueInput
  }

  /**
   * FeedSnapshot updateMany
   */
  export type FeedSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedSnapshots.
     */
    data: XOR<FeedSnapshotUpdateManyMutationInput, FeedSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which FeedSnapshots to update
     */
    where?: FeedSnapshotWhereInput
    /**
     * Limit how many FeedSnapshots to update.
     */
    limit?: number
  }

  /**
   * FeedSnapshot updateManyAndReturn
   */
  export type FeedSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update FeedSnapshots.
     */
    data: XOR<FeedSnapshotUpdateManyMutationInput, FeedSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which FeedSnapshots to update
     */
    where?: FeedSnapshotWhereInput
    /**
     * Limit how many FeedSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedSnapshot upsert
   */
  export type FeedSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedSnapshot to update in case it exists.
     */
    where: FeedSnapshotWhereUniqueInput
    /**
     * In case the FeedSnapshot found by the `where` argument doesn't exist, create a new FeedSnapshot with this data.
     */
    create: XOR<FeedSnapshotCreateInput, FeedSnapshotUncheckedCreateInput>
    /**
     * In case the FeedSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedSnapshotUpdateInput, FeedSnapshotUncheckedUpdateInput>
  }

  /**
   * FeedSnapshot delete
   */
  export type FeedSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    /**
     * Filter which FeedSnapshot to delete.
     */
    where: FeedSnapshotWhereUniqueInput
  }

  /**
   * FeedSnapshot deleteMany
   */
  export type FeedSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedSnapshots to delete
     */
    where?: FeedSnapshotWhereInput
    /**
     * Limit how many FeedSnapshots to delete.
     */
    limit?: number
  }

  /**
   * FeedSnapshot without action
   */
  export type FeedSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model Interaction
   */

  export type AggregateInteraction = {
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  export type InteractionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    articleId: string | null
    clusterId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type InteractionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    articleId: string | null
    clusterId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type InteractionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    articleId: number
    clusterId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type InteractionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    articleId?: true
    clusterId?: true
    metadata?: true
    createdAt?: true
  }

  export type InteractionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    articleId?: true
    clusterId?: true
    metadata?: true
    createdAt?: true
  }

  export type InteractionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    articleId?: true
    clusterId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type InteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interaction to aggregate.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interactions
    **/
    _count?: true | InteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractionMaxAggregateInputType
  }

  export type GetInteractionAggregateType<T extends InteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteraction[P]>
      : GetScalarType<T[P], AggregateInteraction[P]>
  }




  export type InteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithAggregationInput | InteractionOrderByWithAggregationInput[]
    by: InteractionScalarFieldEnum[] | InteractionScalarFieldEnum
    having?: InteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractionCountAggregateInputType | true
    _min?: InteractionMinAggregateInputType
    _max?: InteractionMaxAggregateInputType
  }

  export type InteractionGroupByOutputType = {
    id: string
    userId: string
    type: string
    articleId: string | null
    clusterId: string | null
    metadata: string
    createdAt: Date
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  type GetInteractionGroupByPayload<T extends InteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionGroupByOutputType[P]>
        }
      >
    >


  export type InteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    articleId?: boolean
    clusterId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    articleId?: boolean
    clusterId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    articleId?: boolean
    clusterId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    articleId?: boolean
    clusterId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type InteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "articleId" | "clusterId" | "metadata" | "createdAt", ExtArgs["result"]["interaction"]>
  export type InteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      articleId: string | null
      clusterId: string | null
      metadata: string
      createdAt: Date
    }, ExtArgs["result"]["interaction"]>
    composites: {}
  }

  type InteractionGetPayload<S extends boolean | null | undefined | InteractionDefaultArgs> = $Result.GetResult<Prisma.$InteractionPayload, S>

  type InteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractionCountAggregateInputType | true
    }

  export interface InteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interaction'], meta: { name: 'Interaction' } }
    /**
     * Find zero or one Interaction that matches the filter.
     * @param {InteractionFindUniqueArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionFindUniqueArgs>(args: SelectSubset<T, InteractionFindUniqueArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionFindUniqueOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionFindFirstArgs>(args?: SelectSubset<T, InteractionFindFirstArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interaction.findMany()
     * 
     * // Get first 10 Interactions
     * const interactions = await prisma.interaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactionWithIdOnly = await prisma.interaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractionFindManyArgs>(args?: SelectSubset<T, InteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interaction.
     * @param {InteractionCreateArgs} args - Arguments to create a Interaction.
     * @example
     * // Create one Interaction
     * const Interaction = await prisma.interaction.create({
     *   data: {
     *     // ... data to create a Interaction
     *   }
     * })
     * 
     */
    create<T extends InteractionCreateArgs>(args: SelectSubset<T, InteractionCreateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interactions.
     * @param {InteractionCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractionCreateManyArgs>(args?: SelectSubset<T, InteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {InteractionCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, InteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interaction.
     * @param {InteractionDeleteArgs} args - Arguments to delete one Interaction.
     * @example
     * // Delete one Interaction
     * const Interaction = await prisma.interaction.delete({
     *   where: {
     *     // ... filter to delete one Interaction
     *   }
     * })
     * 
     */
    delete<T extends InteractionDeleteArgs>(args: SelectSubset<T, InteractionDeleteArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interaction.
     * @param {InteractionUpdateArgs} args - Arguments to update one Interaction.
     * @example
     * // Update one Interaction
     * const interaction = await prisma.interaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractionUpdateArgs>(args: SelectSubset<T, InteractionUpdateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interactions.
     * @param {InteractionDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractionDeleteManyArgs>(args?: SelectSubset<T, InteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractionUpdateManyArgs>(args: SelectSubset<T, InteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {InteractionUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends InteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, InteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interaction.
     * @param {InteractionUpsertArgs} args - Arguments to update or create a Interaction.
     * @example
     * // Update or create a Interaction
     * const interaction = await prisma.interaction.upsert({
     *   create: {
     *     // ... data to create a Interaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction we want to update
     *   }
     * })
     */
    upsert<T extends InteractionUpsertArgs>(args: SelectSubset<T, InteractionUpsertArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interaction.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
    **/
    count<T extends InteractionCountArgs>(
      args?: Subset<T, InteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteractionAggregateArgs>(args: Subset<T, InteractionAggregateArgs>): Prisma.PrismaPromise<GetInteractionAggregateType<T>>

    /**
     * Group by Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionGroupByArgs} args - Group by arguments.
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
      T extends InteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionGroupByArgs['orderBy'] }
        : { orderBy?: InteractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interaction model
   */
  readonly fields: InteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Interaction model
   */
  interface InteractionFieldRefs {
    readonly id: FieldRef<"Interaction", 'String'>
    readonly userId: FieldRef<"Interaction", 'String'>
    readonly type: FieldRef<"Interaction", 'String'>
    readonly articleId: FieldRef<"Interaction", 'String'>
    readonly clusterId: FieldRef<"Interaction", 'String'>
    readonly metadata: FieldRef<"Interaction", 'String'>
    readonly createdAt: FieldRef<"Interaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interaction findUnique
   */
  export type InteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findUniqueOrThrow
   */
  export type InteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findFirst
   */
  export type InteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findFirstOrThrow
   */
  export type InteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findMany
   */
  export type InteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction create
   */
  export type InteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Interaction.
     */
    data: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
  }

  /**
   * Interaction createMany
   */
  export type InteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interaction createManyAndReturn
   */
  export type InteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction update
   */
  export type InteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Interaction.
     */
    data: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
    /**
     * Choose, which Interaction to update.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction updateMany
   */
  export type InteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
  }

  /**
   * Interaction updateManyAndReturn
   */
  export type InteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction upsert
   */
  export type InteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Interaction to update in case it exists.
     */
    where: InteractionWhereUniqueInput
    /**
     * In case the Interaction found by the `where` argument doesn't exist, create a new Interaction with this data.
     */
    create: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
    /**
     * In case the Interaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
  }

  /**
   * Interaction delete
   */
  export type InteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter which Interaction to delete.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction deleteMany
   */
  export type InteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number
  }

  /**
   * Interaction without action
   */
  export type InteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
  }


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
    username: string | null
    displayName: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    displayName: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    displayName: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    displayName: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | User$articlesArgs<ExtArgs>
    clusters?: boolean | User$clustersArgs<ExtArgs>
    preference?: boolean | User$preferenceArgs<ExtArgs>
    snapshots?: boolean | User$snapshotsArgs<ExtArgs>
    ingestionRuns?: boolean | User$ingestionRunsArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "displayName" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | User$articlesArgs<ExtArgs>
    clusters?: boolean | User$clustersArgs<ExtArgs>
    preference?: boolean | User$preferenceArgs<ExtArgs>
    snapshots?: boolean | User$snapshotsArgs<ExtArgs>
    ingestionRuns?: boolean | User$ingestionRunsArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      clusters: Prisma.$ClusterPayload<ExtArgs>[]
      preference: Prisma.$PreferencePayload<ExtArgs> | null
      snapshots: Prisma.$FeedSnapshotPayload<ExtArgs>[]
      ingestionRuns: Prisma.$IngestionRunPayload<ExtArgs>[]
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      displayName: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
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
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clusters<T extends User$clustersArgs<ExtArgs> = {}>(args?: Subset<T, User$clustersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preference<T extends User$preferenceArgs<ExtArgs> = {}>(args?: Subset<T, User$preferenceArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    snapshots<T extends User$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, User$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingestionRuns<T extends User$ingestionRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$ingestionRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends User$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * User.clusters
   */
  export type User$clustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    where?: ClusterWhereInput
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    cursor?: ClusterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * User.preference
   */
  export type User$preferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    where?: PreferenceWhereInput
  }

  /**
   * User.snapshots
   */
  export type User$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedSnapshot
     */
    select?: FeedSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedSnapshot
     */
    omit?: FeedSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedSnapshotInclude<ExtArgs> | null
    where?: FeedSnapshotWhereInput
    orderBy?: FeedSnapshotOrderByWithRelationInput | FeedSnapshotOrderByWithRelationInput[]
    cursor?: FeedSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedSnapshotScalarFieldEnum | FeedSnapshotScalarFieldEnum[]
  }

  /**
   * User.ingestionRuns
   */
  export type User$ingestionRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    where?: IngestionRunWhereInput
    orderBy?: IngestionRunOrderByWithRelationInput | IngestionRunOrderByWithRelationInput[]
    cursor?: IngestionRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngestionRunScalarFieldEnum | IngestionRunScalarFieldEnum[]
  }

  /**
   * User.interactions
   */
  export type User$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly tokenHash: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model IngestionRun
   */

  export type AggregateIngestionRun = {
    _count: IngestionRunCountAggregateOutputType | null
    _avg: IngestionRunAvgAggregateOutputType | null
    _sum: IngestionRunSumAggregateOutputType | null
    _min: IngestionRunMinAggregateOutputType | null
    _max: IngestionRunMaxAggregateOutputType | null
  }

  export type IngestionRunAvgAggregateOutputType = {
    articleCount: number | null
    dedupedCount: number | null
    clusterCount: number | null
  }

  export type IngestionRunSumAggregateOutputType = {
    articleCount: number | null
    dedupedCount: number | null
    clusterCount: number | null
  }

  export type IngestionRunMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    mode: string | null
    articleCount: number | null
    dedupedCount: number | null
    clusterCount: number | null
    clusterState: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngestionRunMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    mode: string | null
    articleCount: number | null
    dedupedCount: number | null
    clusterCount: number | null
    clusterState: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngestionRunCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    mode: number
    articleCount: number
    dedupedCount: number
    clusterCount: number
    clusterState: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IngestionRunAvgAggregateInputType = {
    articleCount?: true
    dedupedCount?: true
    clusterCount?: true
  }

  export type IngestionRunSumAggregateInputType = {
    articleCount?: true
    dedupedCount?: true
    clusterCount?: true
  }

  export type IngestionRunMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    mode?: true
    articleCount?: true
    dedupedCount?: true
    clusterCount?: true
    clusterState?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngestionRunMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    mode?: true
    articleCount?: true
    dedupedCount?: true
    clusterCount?: true
    clusterState?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngestionRunCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    mode?: true
    articleCount?: true
    dedupedCount?: true
    clusterCount?: true
    clusterState?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IngestionRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestionRun to aggregate.
     */
    where?: IngestionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionRuns to fetch.
     */
    orderBy?: IngestionRunOrderByWithRelationInput | IngestionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestionRuns
    **/
    _count?: true | IngestionRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngestionRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngestionRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestionRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestionRunMaxAggregateInputType
  }

  export type GetIngestionRunAggregateType<T extends IngestionRunAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestionRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestionRun[P]>
      : GetScalarType<T[P], AggregateIngestionRun[P]>
  }




  export type IngestionRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestionRunWhereInput
    orderBy?: IngestionRunOrderByWithAggregationInput | IngestionRunOrderByWithAggregationInput[]
    by: IngestionRunScalarFieldEnum[] | IngestionRunScalarFieldEnum
    having?: IngestionRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestionRunCountAggregateInputType | true
    _avg?: IngestionRunAvgAggregateInputType
    _sum?: IngestionRunSumAggregateInputType
    _min?: IngestionRunMinAggregateInputType
    _max?: IngestionRunMaxAggregateInputType
  }

  export type IngestionRunGroupByOutputType = {
    id: string
    userId: string
    status: string
    mode: string
    articleCount: number
    dedupedCount: number
    clusterCount: number
    clusterState: string
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: IngestionRunCountAggregateOutputType | null
    _avg: IngestionRunAvgAggregateOutputType | null
    _sum: IngestionRunSumAggregateOutputType | null
    _min: IngestionRunMinAggregateOutputType | null
    _max: IngestionRunMaxAggregateOutputType | null
  }

  type GetIngestionRunGroupByPayload<T extends IngestionRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestionRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestionRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestionRunGroupByOutputType[P]>
            : GetScalarType<T[P], IngestionRunGroupByOutputType[P]>
        }
      >
    >


  export type IngestionRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    mode?: boolean
    articleCount?: boolean
    dedupedCount?: boolean
    clusterCount?: boolean
    clusterState?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    articles?: boolean | IngestionRun$articlesArgs<ExtArgs>
    clusters?: boolean | IngestionRun$clustersArgs<ExtArgs>
    sourceFetches?: boolean | IngestionRun$sourceFetchesArgs<ExtArgs>
    _count?: boolean | IngestionRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestionRun"]>

  export type IngestionRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    mode?: boolean
    articleCount?: boolean
    dedupedCount?: boolean
    clusterCount?: boolean
    clusterState?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestionRun"]>

  export type IngestionRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    mode?: boolean
    articleCount?: boolean
    dedupedCount?: boolean
    clusterCount?: boolean
    clusterState?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestionRun"]>

  export type IngestionRunSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    mode?: boolean
    articleCount?: boolean
    dedupedCount?: boolean
    clusterCount?: boolean
    clusterState?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IngestionRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "mode" | "articleCount" | "dedupedCount" | "clusterCount" | "clusterState" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["ingestionRun"]>
  export type IngestionRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    articles?: boolean | IngestionRun$articlesArgs<ExtArgs>
    clusters?: boolean | IngestionRun$clustersArgs<ExtArgs>
    sourceFetches?: boolean | IngestionRun$sourceFetchesArgs<ExtArgs>
    _count?: boolean | IngestionRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngestionRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IngestionRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IngestionRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestionRun"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      clusters: Prisma.$ClusterPayload<ExtArgs>[]
      sourceFetches: Prisma.$SourceFetchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: string
      mode: string
      articleCount: number
      dedupedCount: number
      clusterCount: number
      clusterState: string
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ingestionRun"]>
    composites: {}
  }

  type IngestionRunGetPayload<S extends boolean | null | undefined | IngestionRunDefaultArgs> = $Result.GetResult<Prisma.$IngestionRunPayload, S>

  type IngestionRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngestionRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngestionRunCountAggregateInputType | true
    }

  export interface IngestionRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestionRun'], meta: { name: 'IngestionRun' } }
    /**
     * Find zero or one IngestionRun that matches the filter.
     * @param {IngestionRunFindUniqueArgs} args - Arguments to find a IngestionRun
     * @example
     * // Get one IngestionRun
     * const ingestionRun = await prisma.ingestionRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestionRunFindUniqueArgs>(args: SelectSubset<T, IngestionRunFindUniqueArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngestionRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngestionRunFindUniqueOrThrowArgs} args - Arguments to find a IngestionRun
     * @example
     * // Get one IngestionRun
     * const ingestionRun = await prisma.ingestionRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestionRunFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestionRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestionRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionRunFindFirstArgs} args - Arguments to find a IngestionRun
     * @example
     * // Get one IngestionRun
     * const ingestionRun = await prisma.ingestionRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestionRunFindFirstArgs>(args?: SelectSubset<T, IngestionRunFindFirstArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestionRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionRunFindFirstOrThrowArgs} args - Arguments to find a IngestionRun
     * @example
     * // Get one IngestionRun
     * const ingestionRun = await prisma.ingestionRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestionRunFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestionRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngestionRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestionRuns
     * const ingestionRuns = await prisma.ingestionRun.findMany()
     * 
     * // Get first 10 IngestionRuns
     * const ingestionRuns = await prisma.ingestionRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingestionRunWithIdOnly = await prisma.ingestionRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngestionRunFindManyArgs>(args?: SelectSubset<T, IngestionRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngestionRun.
     * @param {IngestionRunCreateArgs} args - Arguments to create a IngestionRun.
     * @example
     * // Create one IngestionRun
     * const IngestionRun = await prisma.ingestionRun.create({
     *   data: {
     *     // ... data to create a IngestionRun
     *   }
     * })
     * 
     */
    create<T extends IngestionRunCreateArgs>(args: SelectSubset<T, IngestionRunCreateArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngestionRuns.
     * @param {IngestionRunCreateManyArgs} args - Arguments to create many IngestionRuns.
     * @example
     * // Create many IngestionRuns
     * const ingestionRun = await prisma.ingestionRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestionRunCreateManyArgs>(args?: SelectSubset<T, IngestionRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestionRuns and returns the data saved in the database.
     * @param {IngestionRunCreateManyAndReturnArgs} args - Arguments to create many IngestionRuns.
     * @example
     * // Create many IngestionRuns
     * const ingestionRun = await prisma.ingestionRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestionRuns and only return the `id`
     * const ingestionRunWithIdOnly = await prisma.ingestionRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestionRunCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestionRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngestionRun.
     * @param {IngestionRunDeleteArgs} args - Arguments to delete one IngestionRun.
     * @example
     * // Delete one IngestionRun
     * const IngestionRun = await prisma.ingestionRun.delete({
     *   where: {
     *     // ... filter to delete one IngestionRun
     *   }
     * })
     * 
     */
    delete<T extends IngestionRunDeleteArgs>(args: SelectSubset<T, IngestionRunDeleteArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngestionRun.
     * @param {IngestionRunUpdateArgs} args - Arguments to update one IngestionRun.
     * @example
     * // Update one IngestionRun
     * const ingestionRun = await prisma.ingestionRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestionRunUpdateArgs>(args: SelectSubset<T, IngestionRunUpdateArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngestionRuns.
     * @param {IngestionRunDeleteManyArgs} args - Arguments to filter IngestionRuns to delete.
     * @example
     * // Delete a few IngestionRuns
     * const { count } = await prisma.ingestionRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestionRunDeleteManyArgs>(args?: SelectSubset<T, IngestionRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestionRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestionRuns
     * const ingestionRun = await prisma.ingestionRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestionRunUpdateManyArgs>(args: SelectSubset<T, IngestionRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestionRuns and returns the data updated in the database.
     * @param {IngestionRunUpdateManyAndReturnArgs} args - Arguments to update many IngestionRuns.
     * @example
     * // Update many IngestionRuns
     * const ingestionRun = await prisma.ingestionRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngestionRuns and only return the `id`
     * const ingestionRunWithIdOnly = await prisma.ingestionRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngestionRunUpdateManyAndReturnArgs>(args: SelectSubset<T, IngestionRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngestionRun.
     * @param {IngestionRunUpsertArgs} args - Arguments to update or create a IngestionRun.
     * @example
     * // Update or create a IngestionRun
     * const ingestionRun = await prisma.ingestionRun.upsert({
     *   create: {
     *     // ... data to create a IngestionRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestionRun we want to update
     *   }
     * })
     */
    upsert<T extends IngestionRunUpsertArgs>(args: SelectSubset<T, IngestionRunUpsertArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngestionRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionRunCountArgs} args - Arguments to filter IngestionRuns to count.
     * @example
     * // Count the number of IngestionRuns
     * const count = await prisma.ingestionRun.count({
     *   where: {
     *     // ... the filter for the IngestionRuns we want to count
     *   }
     * })
    **/
    count<T extends IngestionRunCountArgs>(
      args?: Subset<T, IngestionRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestionRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestionRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngestionRunAggregateArgs>(args: Subset<T, IngestionRunAggregateArgs>): Prisma.PrismaPromise<GetIngestionRunAggregateType<T>>

    /**
     * Group by IngestionRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionRunGroupByArgs} args - Group by arguments.
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
      T extends IngestionRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestionRunGroupByArgs['orderBy'] }
        : { orderBy?: IngestionRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngestionRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestionRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestionRun model
   */
  readonly fields: IngestionRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestionRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestionRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articles<T extends IngestionRun$articlesArgs<ExtArgs> = {}>(args?: Subset<T, IngestionRun$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clusters<T extends IngestionRun$clustersArgs<ExtArgs> = {}>(args?: Subset<T, IngestionRun$clustersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sourceFetches<T extends IngestionRun$sourceFetchesArgs<ExtArgs> = {}>(args?: Subset<T, IngestionRun$sourceFetchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the IngestionRun model
   */
  interface IngestionRunFieldRefs {
    readonly id: FieldRef<"IngestionRun", 'String'>
    readonly userId: FieldRef<"IngestionRun", 'String'>
    readonly status: FieldRef<"IngestionRun", 'String'>
    readonly mode: FieldRef<"IngestionRun", 'String'>
    readonly articleCount: FieldRef<"IngestionRun", 'Int'>
    readonly dedupedCount: FieldRef<"IngestionRun", 'Int'>
    readonly clusterCount: FieldRef<"IngestionRun", 'Int'>
    readonly clusterState: FieldRef<"IngestionRun", 'String'>
    readonly startedAt: FieldRef<"IngestionRun", 'DateTime'>
    readonly completedAt: FieldRef<"IngestionRun", 'DateTime'>
    readonly createdAt: FieldRef<"IngestionRun", 'DateTime'>
    readonly updatedAt: FieldRef<"IngestionRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IngestionRun findUnique
   */
  export type IngestionRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * Filter, which IngestionRun to fetch.
     */
    where: IngestionRunWhereUniqueInput
  }

  /**
   * IngestionRun findUniqueOrThrow
   */
  export type IngestionRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * Filter, which IngestionRun to fetch.
     */
    where: IngestionRunWhereUniqueInput
  }

  /**
   * IngestionRun findFirst
   */
  export type IngestionRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * Filter, which IngestionRun to fetch.
     */
    where?: IngestionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionRuns to fetch.
     */
    orderBy?: IngestionRunOrderByWithRelationInput | IngestionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestionRuns.
     */
    cursor?: IngestionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestionRuns.
     */
    distinct?: IngestionRunScalarFieldEnum | IngestionRunScalarFieldEnum[]
  }

  /**
   * IngestionRun findFirstOrThrow
   */
  export type IngestionRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * Filter, which IngestionRun to fetch.
     */
    where?: IngestionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionRuns to fetch.
     */
    orderBy?: IngestionRunOrderByWithRelationInput | IngestionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestionRuns.
     */
    cursor?: IngestionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestionRuns.
     */
    distinct?: IngestionRunScalarFieldEnum | IngestionRunScalarFieldEnum[]
  }

  /**
   * IngestionRun findMany
   */
  export type IngestionRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * Filter, which IngestionRuns to fetch.
     */
    where?: IngestionRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionRuns to fetch.
     */
    orderBy?: IngestionRunOrderByWithRelationInput | IngestionRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestionRuns.
     */
    cursor?: IngestionRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionRuns.
     */
    skip?: number
    distinct?: IngestionRunScalarFieldEnum | IngestionRunScalarFieldEnum[]
  }

  /**
   * IngestionRun create
   */
  export type IngestionRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * The data needed to create a IngestionRun.
     */
    data: XOR<IngestionRunCreateInput, IngestionRunUncheckedCreateInput>
  }

  /**
   * IngestionRun createMany
   */
  export type IngestionRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestionRuns.
     */
    data: IngestionRunCreateManyInput | IngestionRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestionRun createManyAndReturn
   */
  export type IngestionRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * The data used to create many IngestionRuns.
     */
    data: IngestionRunCreateManyInput | IngestionRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngestionRun update
   */
  export type IngestionRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * The data needed to update a IngestionRun.
     */
    data: XOR<IngestionRunUpdateInput, IngestionRunUncheckedUpdateInput>
    /**
     * Choose, which IngestionRun to update.
     */
    where: IngestionRunWhereUniqueInput
  }

  /**
   * IngestionRun updateMany
   */
  export type IngestionRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestionRuns.
     */
    data: XOR<IngestionRunUpdateManyMutationInput, IngestionRunUncheckedUpdateManyInput>
    /**
     * Filter which IngestionRuns to update
     */
    where?: IngestionRunWhereInput
    /**
     * Limit how many IngestionRuns to update.
     */
    limit?: number
  }

  /**
   * IngestionRun updateManyAndReturn
   */
  export type IngestionRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * The data used to update IngestionRuns.
     */
    data: XOR<IngestionRunUpdateManyMutationInput, IngestionRunUncheckedUpdateManyInput>
    /**
     * Filter which IngestionRuns to update
     */
    where?: IngestionRunWhereInput
    /**
     * Limit how many IngestionRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngestionRun upsert
   */
  export type IngestionRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * The filter to search for the IngestionRun to update in case it exists.
     */
    where: IngestionRunWhereUniqueInput
    /**
     * In case the IngestionRun found by the `where` argument doesn't exist, create a new IngestionRun with this data.
     */
    create: XOR<IngestionRunCreateInput, IngestionRunUncheckedCreateInput>
    /**
     * In case the IngestionRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestionRunUpdateInput, IngestionRunUncheckedUpdateInput>
  }

  /**
   * IngestionRun delete
   */
  export type IngestionRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
    /**
     * Filter which IngestionRun to delete.
     */
    where: IngestionRunWhereUniqueInput
  }

  /**
   * IngestionRun deleteMany
   */
  export type IngestionRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestionRuns to delete
     */
    where?: IngestionRunWhereInput
    /**
     * Limit how many IngestionRuns to delete.
     */
    limit?: number
  }

  /**
   * IngestionRun.articles
   */
  export type IngestionRun$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * IngestionRun.clusters
   */
  export type IngestionRun$clustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    where?: ClusterWhereInput
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    cursor?: ClusterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * IngestionRun.sourceFetches
   */
  export type IngestionRun$sourceFetchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    where?: SourceFetchWhereInput
    orderBy?: SourceFetchOrderByWithRelationInput | SourceFetchOrderByWithRelationInput[]
    cursor?: SourceFetchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceFetchScalarFieldEnum | SourceFetchScalarFieldEnum[]
  }

  /**
   * IngestionRun without action
   */
  export type IngestionRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionRun
     */
    select?: IngestionRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionRun
     */
    omit?: IngestionRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestionRunInclude<ExtArgs> | null
  }


  /**
   * Model SourceFetch
   */

  export type AggregateSourceFetch = {
    _count: SourceFetchCountAggregateOutputType | null
    _avg: SourceFetchAvgAggregateOutputType | null
    _sum: SourceFetchSumAggregateOutputType | null
    _min: SourceFetchMinAggregateOutputType | null
    _max: SourceFetchMaxAggregateOutputType | null
  }

  export type SourceFetchAvgAggregateOutputType = {
    articleCount: number | null
    latencyMs: number | null
  }

  export type SourceFetchSumAggregateOutputType = {
    articleCount: number | null
    latencyMs: number | null
  }

  export type SourceFetchMinAggregateOutputType = {
    id: string | null
    ingestionRunId: string | null
    sourceName: string | null
    sourceUrl: string | null
    mode: string | null
    status: string | null
    articleCount: number | null
    latencyMs: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type SourceFetchMaxAggregateOutputType = {
    id: string | null
    ingestionRunId: string | null
    sourceName: string | null
    sourceUrl: string | null
    mode: string | null
    status: string | null
    articleCount: number | null
    latencyMs: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type SourceFetchCountAggregateOutputType = {
    id: number
    ingestionRunId: number
    sourceName: number
    sourceUrl: number
    mode: number
    status: number
    articleCount: number
    latencyMs: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type SourceFetchAvgAggregateInputType = {
    articleCount?: true
    latencyMs?: true
  }

  export type SourceFetchSumAggregateInputType = {
    articleCount?: true
    latencyMs?: true
  }

  export type SourceFetchMinAggregateInputType = {
    id?: true
    ingestionRunId?: true
    sourceName?: true
    sourceUrl?: true
    mode?: true
    status?: true
    articleCount?: true
    latencyMs?: true
    errorMessage?: true
    createdAt?: true
  }

  export type SourceFetchMaxAggregateInputType = {
    id?: true
    ingestionRunId?: true
    sourceName?: true
    sourceUrl?: true
    mode?: true
    status?: true
    articleCount?: true
    latencyMs?: true
    errorMessage?: true
    createdAt?: true
  }

  export type SourceFetchCountAggregateInputType = {
    id?: true
    ingestionRunId?: true
    sourceName?: true
    sourceUrl?: true
    mode?: true
    status?: true
    articleCount?: true
    latencyMs?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type SourceFetchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceFetch to aggregate.
     */
    where?: SourceFetchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceFetches to fetch.
     */
    orderBy?: SourceFetchOrderByWithRelationInput | SourceFetchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceFetchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceFetches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceFetches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceFetches
    **/
    _count?: true | SourceFetchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceFetchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceFetchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceFetchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceFetchMaxAggregateInputType
  }

  export type GetSourceFetchAggregateType<T extends SourceFetchAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceFetch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceFetch[P]>
      : GetScalarType<T[P], AggregateSourceFetch[P]>
  }




  export type SourceFetchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceFetchWhereInput
    orderBy?: SourceFetchOrderByWithAggregationInput | SourceFetchOrderByWithAggregationInput[]
    by: SourceFetchScalarFieldEnum[] | SourceFetchScalarFieldEnum
    having?: SourceFetchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceFetchCountAggregateInputType | true
    _avg?: SourceFetchAvgAggregateInputType
    _sum?: SourceFetchSumAggregateInputType
    _min?: SourceFetchMinAggregateInputType
    _max?: SourceFetchMaxAggregateInputType
  }

  export type SourceFetchGroupByOutputType = {
    id: string
    ingestionRunId: string
    sourceName: string
    sourceUrl: string
    mode: string
    status: string
    articleCount: number
    latencyMs: number
    errorMessage: string | null
    createdAt: Date
    _count: SourceFetchCountAggregateOutputType | null
    _avg: SourceFetchAvgAggregateOutputType | null
    _sum: SourceFetchSumAggregateOutputType | null
    _min: SourceFetchMinAggregateOutputType | null
    _max: SourceFetchMaxAggregateOutputType | null
  }

  type GetSourceFetchGroupByPayload<T extends SourceFetchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceFetchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceFetchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceFetchGroupByOutputType[P]>
            : GetScalarType<T[P], SourceFetchGroupByOutputType[P]>
        }
      >
    >


  export type SourceFetchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    mode?: boolean
    status?: boolean
    articleCount?: boolean
    latencyMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    ingestionRun?: boolean | IngestionRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceFetch"]>

  export type SourceFetchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    mode?: boolean
    status?: boolean
    articleCount?: boolean
    latencyMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    ingestionRun?: boolean | IngestionRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceFetch"]>

  export type SourceFetchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    mode?: boolean
    status?: boolean
    articleCount?: boolean
    latencyMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    ingestionRun?: boolean | IngestionRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceFetch"]>

  export type SourceFetchSelectScalar = {
    id?: boolean
    ingestionRunId?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    mode?: boolean
    status?: boolean
    articleCount?: boolean
    latencyMs?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type SourceFetchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ingestionRunId" | "sourceName" | "sourceUrl" | "mode" | "status" | "articleCount" | "latencyMs" | "errorMessage" | "createdAt", ExtArgs["result"]["sourceFetch"]>
  export type SourceFetchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingestionRun?: boolean | IngestionRunDefaultArgs<ExtArgs>
  }
  export type SourceFetchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingestionRun?: boolean | IngestionRunDefaultArgs<ExtArgs>
  }
  export type SourceFetchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingestionRun?: boolean | IngestionRunDefaultArgs<ExtArgs>
  }

  export type $SourceFetchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceFetch"
    objects: {
      ingestionRun: Prisma.$IngestionRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ingestionRunId: string
      sourceName: string
      sourceUrl: string
      mode: string
      status: string
      articleCount: number
      latencyMs: number
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["sourceFetch"]>
    composites: {}
  }

  type SourceFetchGetPayload<S extends boolean | null | undefined | SourceFetchDefaultArgs> = $Result.GetResult<Prisma.$SourceFetchPayload, S>

  type SourceFetchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceFetchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceFetchCountAggregateInputType | true
    }

  export interface SourceFetchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceFetch'], meta: { name: 'SourceFetch' } }
    /**
     * Find zero or one SourceFetch that matches the filter.
     * @param {SourceFetchFindUniqueArgs} args - Arguments to find a SourceFetch
     * @example
     * // Get one SourceFetch
     * const sourceFetch = await prisma.sourceFetch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFetchFindUniqueArgs>(args: SelectSubset<T, SourceFetchFindUniqueArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceFetch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceFetchFindUniqueOrThrowArgs} args - Arguments to find a SourceFetch
     * @example
     * // Get one SourceFetch
     * const sourceFetch = await prisma.sourceFetch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFetchFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFetchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceFetch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFetchFindFirstArgs} args - Arguments to find a SourceFetch
     * @example
     * // Get one SourceFetch
     * const sourceFetch = await prisma.sourceFetch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFetchFindFirstArgs>(args?: SelectSubset<T, SourceFetchFindFirstArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceFetch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFetchFindFirstOrThrowArgs} args - Arguments to find a SourceFetch
     * @example
     * // Get one SourceFetch
     * const sourceFetch = await prisma.sourceFetch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFetchFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFetchFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceFetches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFetchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceFetches
     * const sourceFetches = await prisma.sourceFetch.findMany()
     * 
     * // Get first 10 SourceFetches
     * const sourceFetches = await prisma.sourceFetch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceFetchWithIdOnly = await prisma.sourceFetch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFetchFindManyArgs>(args?: SelectSubset<T, SourceFetchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceFetch.
     * @param {SourceFetchCreateArgs} args - Arguments to create a SourceFetch.
     * @example
     * // Create one SourceFetch
     * const SourceFetch = await prisma.sourceFetch.create({
     *   data: {
     *     // ... data to create a SourceFetch
     *   }
     * })
     * 
     */
    create<T extends SourceFetchCreateArgs>(args: SelectSubset<T, SourceFetchCreateArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceFetches.
     * @param {SourceFetchCreateManyArgs} args - Arguments to create many SourceFetches.
     * @example
     * // Create many SourceFetches
     * const sourceFetch = await prisma.sourceFetch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceFetchCreateManyArgs>(args?: SelectSubset<T, SourceFetchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceFetches and returns the data saved in the database.
     * @param {SourceFetchCreateManyAndReturnArgs} args - Arguments to create many SourceFetches.
     * @example
     * // Create many SourceFetches
     * const sourceFetch = await prisma.sourceFetch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceFetches and only return the `id`
     * const sourceFetchWithIdOnly = await prisma.sourceFetch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceFetchCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceFetchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceFetch.
     * @param {SourceFetchDeleteArgs} args - Arguments to delete one SourceFetch.
     * @example
     * // Delete one SourceFetch
     * const SourceFetch = await prisma.sourceFetch.delete({
     *   where: {
     *     // ... filter to delete one SourceFetch
     *   }
     * })
     * 
     */
    delete<T extends SourceFetchDeleteArgs>(args: SelectSubset<T, SourceFetchDeleteArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceFetch.
     * @param {SourceFetchUpdateArgs} args - Arguments to update one SourceFetch.
     * @example
     * // Update one SourceFetch
     * const sourceFetch = await prisma.sourceFetch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceFetchUpdateArgs>(args: SelectSubset<T, SourceFetchUpdateArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceFetches.
     * @param {SourceFetchDeleteManyArgs} args - Arguments to filter SourceFetches to delete.
     * @example
     * // Delete a few SourceFetches
     * const { count } = await prisma.sourceFetch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceFetchDeleteManyArgs>(args?: SelectSubset<T, SourceFetchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceFetches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFetchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceFetches
     * const sourceFetch = await prisma.sourceFetch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceFetchUpdateManyArgs>(args: SelectSubset<T, SourceFetchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceFetches and returns the data updated in the database.
     * @param {SourceFetchUpdateManyAndReturnArgs} args - Arguments to update many SourceFetches.
     * @example
     * // Update many SourceFetches
     * const sourceFetch = await prisma.sourceFetch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceFetches and only return the `id`
     * const sourceFetchWithIdOnly = await prisma.sourceFetch.updateManyAndReturn({
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
    updateManyAndReturn<T extends SourceFetchUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceFetchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceFetch.
     * @param {SourceFetchUpsertArgs} args - Arguments to update or create a SourceFetch.
     * @example
     * // Update or create a SourceFetch
     * const sourceFetch = await prisma.sourceFetch.upsert({
     *   create: {
     *     // ... data to create a SourceFetch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceFetch we want to update
     *   }
     * })
     */
    upsert<T extends SourceFetchUpsertArgs>(args: SelectSubset<T, SourceFetchUpsertArgs<ExtArgs>>): Prisma__SourceFetchClient<$Result.GetResult<Prisma.$SourceFetchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceFetches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFetchCountArgs} args - Arguments to filter SourceFetches to count.
     * @example
     * // Count the number of SourceFetches
     * const count = await prisma.sourceFetch.count({
     *   where: {
     *     // ... the filter for the SourceFetches we want to count
     *   }
     * })
    **/
    count<T extends SourceFetchCountArgs>(
      args?: Subset<T, SourceFetchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceFetchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceFetch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFetchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceFetchAggregateArgs>(args: Subset<T, SourceFetchAggregateArgs>): Prisma.PrismaPromise<GetSourceFetchAggregateType<T>>

    /**
     * Group by SourceFetch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFetchGroupByArgs} args - Group by arguments.
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
      T extends SourceFetchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceFetchGroupByArgs['orderBy'] }
        : { orderBy?: SourceFetchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceFetchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceFetchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceFetch model
   */
  readonly fields: SourceFetchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceFetch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceFetchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingestionRun<T extends IngestionRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngestionRunDefaultArgs<ExtArgs>>): Prisma__IngestionRunClient<$Result.GetResult<Prisma.$IngestionRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SourceFetch model
   */
  interface SourceFetchFieldRefs {
    readonly id: FieldRef<"SourceFetch", 'String'>
    readonly ingestionRunId: FieldRef<"SourceFetch", 'String'>
    readonly sourceName: FieldRef<"SourceFetch", 'String'>
    readonly sourceUrl: FieldRef<"SourceFetch", 'String'>
    readonly mode: FieldRef<"SourceFetch", 'String'>
    readonly status: FieldRef<"SourceFetch", 'String'>
    readonly articleCount: FieldRef<"SourceFetch", 'Int'>
    readonly latencyMs: FieldRef<"SourceFetch", 'Int'>
    readonly errorMessage: FieldRef<"SourceFetch", 'String'>
    readonly createdAt: FieldRef<"SourceFetch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourceFetch findUnique
   */
  export type SourceFetchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * Filter, which SourceFetch to fetch.
     */
    where: SourceFetchWhereUniqueInput
  }

  /**
   * SourceFetch findUniqueOrThrow
   */
  export type SourceFetchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * Filter, which SourceFetch to fetch.
     */
    where: SourceFetchWhereUniqueInput
  }

  /**
   * SourceFetch findFirst
   */
  export type SourceFetchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * Filter, which SourceFetch to fetch.
     */
    where?: SourceFetchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceFetches to fetch.
     */
    orderBy?: SourceFetchOrderByWithRelationInput | SourceFetchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceFetches.
     */
    cursor?: SourceFetchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceFetches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceFetches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceFetches.
     */
    distinct?: SourceFetchScalarFieldEnum | SourceFetchScalarFieldEnum[]
  }

  /**
   * SourceFetch findFirstOrThrow
   */
  export type SourceFetchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * Filter, which SourceFetch to fetch.
     */
    where?: SourceFetchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceFetches to fetch.
     */
    orderBy?: SourceFetchOrderByWithRelationInput | SourceFetchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceFetches.
     */
    cursor?: SourceFetchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceFetches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceFetches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceFetches.
     */
    distinct?: SourceFetchScalarFieldEnum | SourceFetchScalarFieldEnum[]
  }

  /**
   * SourceFetch findMany
   */
  export type SourceFetchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * Filter, which SourceFetches to fetch.
     */
    where?: SourceFetchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceFetches to fetch.
     */
    orderBy?: SourceFetchOrderByWithRelationInput | SourceFetchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceFetches.
     */
    cursor?: SourceFetchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceFetches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceFetches.
     */
    skip?: number
    distinct?: SourceFetchScalarFieldEnum | SourceFetchScalarFieldEnum[]
  }

  /**
   * SourceFetch create
   */
  export type SourceFetchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceFetch.
     */
    data: XOR<SourceFetchCreateInput, SourceFetchUncheckedCreateInput>
  }

  /**
   * SourceFetch createMany
   */
  export type SourceFetchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceFetches.
     */
    data: SourceFetchCreateManyInput | SourceFetchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceFetch createManyAndReturn
   */
  export type SourceFetchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * The data used to create many SourceFetches.
     */
    data: SourceFetchCreateManyInput | SourceFetchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceFetch update
   */
  export type SourceFetchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceFetch.
     */
    data: XOR<SourceFetchUpdateInput, SourceFetchUncheckedUpdateInput>
    /**
     * Choose, which SourceFetch to update.
     */
    where: SourceFetchWhereUniqueInput
  }

  /**
   * SourceFetch updateMany
   */
  export type SourceFetchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceFetches.
     */
    data: XOR<SourceFetchUpdateManyMutationInput, SourceFetchUncheckedUpdateManyInput>
    /**
     * Filter which SourceFetches to update
     */
    where?: SourceFetchWhereInput
    /**
     * Limit how many SourceFetches to update.
     */
    limit?: number
  }

  /**
   * SourceFetch updateManyAndReturn
   */
  export type SourceFetchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * The data used to update SourceFetches.
     */
    data: XOR<SourceFetchUpdateManyMutationInput, SourceFetchUncheckedUpdateManyInput>
    /**
     * Filter which SourceFetches to update
     */
    where?: SourceFetchWhereInput
    /**
     * Limit how many SourceFetches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceFetch upsert
   */
  export type SourceFetchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceFetch to update in case it exists.
     */
    where: SourceFetchWhereUniqueInput
    /**
     * In case the SourceFetch found by the `where` argument doesn't exist, create a new SourceFetch with this data.
     */
    create: XOR<SourceFetchCreateInput, SourceFetchUncheckedCreateInput>
    /**
     * In case the SourceFetch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceFetchUpdateInput, SourceFetchUncheckedUpdateInput>
  }

  /**
   * SourceFetch delete
   */
  export type SourceFetchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
    /**
     * Filter which SourceFetch to delete.
     */
    where: SourceFetchWhereUniqueInput
  }

  /**
   * SourceFetch deleteMany
   */
  export type SourceFetchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceFetches to delete
     */
    where?: SourceFetchWhereInput
    /**
     * Limit how many SourceFetches to delete.
     */
    limit?: number
  }

  /**
   * SourceFetch without action
   */
  export type SourceFetchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceFetch
     */
    select?: SourceFetchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceFetch
     */
    omit?: SourceFetchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceFetchInclude<ExtArgs> | null
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


  export const ArticleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lastIngestionRunId: 'lastIngestionRunId',
    sourceName: 'sourceName',
    sourceUrl: 'sourceUrl',
    title: 'title',
    url: 'url',
    canonicalUrl: 'canonicalUrl',
    publishedAt: 'publishedAt',
    fetchedAt: 'fetchedAt',
    author: 'author',
    summary: 'summary',
    contentSnippet: 'contentSnippet',
    imageUrl: 'imageUrl',
    topicCandidates: 'topicCandidates',
    hashTitle: 'hashTitle',
    hashContent: 'hashContent',
    rankingScore: 'rankingScore',
    changeStatus: 'changeStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ClusterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lastIngestionRunId: 'lastIngestionRunId',
    key: 'key',
    contentFingerprint: 'contentFingerprint',
    headline: 'headline',
    summary: 'summary',
    whyItMatters: 'whyItMatters',
    whyRelevant: 'whyRelevant',
    summarySource: 'summarySource',
    summaryModel: 'summaryModel',
    tags: 'tags',
    representativeTitle: 'representativeTitle',
    representativeUrl: 'representativeUrl',
    score: 'score',
    sourceWeight: 'sourceWeight',
    novelty: 'novelty',
    freshness: 'freshness',
    topicRelevance: 'topicRelevance',
    changeStatus: 'changeStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


  export const ClusterArticleScalarFieldEnum: {
    clusterId: 'clusterId',
    articleId: 'articleId',
    position: 'position'
  };

  export type ClusterArticleScalarFieldEnum = (typeof ClusterArticleScalarFieldEnum)[keyof typeof ClusterArticleScalarFieldEnum]


  export const PreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topics: 'topics',
    mutedTopics: 'mutedTopics',
    tone: 'tone',
    useRemoteRss: 'useRemoteRss',
    useOpenAiSummaries: 'useOpenAiSummaries',
    sourceWeights: 'sourceWeights',
    rankingWeights: 'rankingWeights',
    updatedAt: 'updatedAt'
  };

  export type PreferenceScalarFieldEnum = (typeof PreferenceScalarFieldEnum)[keyof typeof PreferenceScalarFieldEnum]


  export const FeedSnapshotScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    snapshotAt: 'snapshotAt',
    clusterIds: 'clusterIds'
  };

  export type FeedSnapshotScalarFieldEnum = (typeof FeedSnapshotScalarFieldEnum)[keyof typeof FeedSnapshotScalarFieldEnum]


  export const InteractionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    articleId: 'articleId',
    clusterId: 'clusterId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type InteractionScalarFieldEnum = (typeof InteractionScalarFieldEnum)[keyof typeof InteractionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    displayName: 'displayName',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const IngestionRunScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    mode: 'mode',
    articleCount: 'articleCount',
    dedupedCount: 'dedupedCount',
    clusterCount: 'clusterCount',
    clusterState: 'clusterState',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IngestionRunScalarFieldEnum = (typeof IngestionRunScalarFieldEnum)[keyof typeof IngestionRunScalarFieldEnum]


  export const SourceFetchScalarFieldEnum: {
    id: 'id',
    ingestionRunId: 'ingestionRunId',
    sourceName: 'sourceName',
    sourceUrl: 'sourceUrl',
    mode: 'mode',
    status: 'status',
    articleCount: 'articleCount',
    latencyMs: 'latencyMs',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type SourceFetchScalarFieldEnum = (typeof SourceFetchScalarFieldEnum)[keyof typeof SourceFetchScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    userId?: StringFilter<"Article"> | string
    lastIngestionRunId?: StringNullableFilter<"Article"> | string | null
    sourceName?: StringFilter<"Article"> | string
    sourceUrl?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    url?: StringFilter<"Article"> | string
    canonicalUrl?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    fetchedAt?: DateTimeFilter<"Article"> | Date | string
    author?: StringNullableFilter<"Article"> | string | null
    summary?: StringNullableFilter<"Article"> | string | null
    contentSnippet?: StringNullableFilter<"Article"> | string | null
    imageUrl?: StringNullableFilter<"Article"> | string | null
    topicCandidates?: StringFilter<"Article"> | string
    hashTitle?: StringFilter<"Article"> | string
    hashContent?: StringFilter<"Article"> | string
    rankingScore?: FloatFilter<"Article"> | number
    changeStatus?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastIngestionRun?: XOR<IngestionRunNullableScalarRelationFilter, IngestionRunWhereInput> | null
    clusterLinks?: ClusterArticleListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    url?: SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    fetchedAt?: SortOrder
    author?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    contentSnippet?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    topicCandidates?: SortOrder
    hashTitle?: SortOrder
    hashContent?: SortOrder
    rankingScore?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lastIngestionRun?: IngestionRunOrderByWithRelationInput
    clusterLinks?: ClusterArticleOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_url?: ArticleUserIdUrlCompoundUniqueInput
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    userId?: StringFilter<"Article"> | string
    lastIngestionRunId?: StringNullableFilter<"Article"> | string | null
    sourceName?: StringFilter<"Article"> | string
    sourceUrl?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    url?: StringFilter<"Article"> | string
    canonicalUrl?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    fetchedAt?: DateTimeFilter<"Article"> | Date | string
    author?: StringNullableFilter<"Article"> | string | null
    summary?: StringNullableFilter<"Article"> | string | null
    contentSnippet?: StringNullableFilter<"Article"> | string | null
    imageUrl?: StringNullableFilter<"Article"> | string | null
    topicCandidates?: StringFilter<"Article"> | string
    hashTitle?: StringFilter<"Article"> | string
    hashContent?: StringFilter<"Article"> | string
    rankingScore?: FloatFilter<"Article"> | number
    changeStatus?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastIngestionRun?: XOR<IngestionRunNullableScalarRelationFilter, IngestionRunWhereInput> | null
    clusterLinks?: ClusterArticleListRelationFilter
  }, "id" | "userId_url">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    url?: SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    fetchedAt?: SortOrder
    author?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    contentSnippet?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    topicCandidates?: SortOrder
    hashTitle?: SortOrder
    hashContent?: SortOrder
    rankingScore?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    userId?: StringWithAggregatesFilter<"Article"> | string
    lastIngestionRunId?: StringNullableWithAggregatesFilter<"Article"> | string | null
    sourceName?: StringWithAggregatesFilter<"Article"> | string
    sourceUrl?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    url?: StringWithAggregatesFilter<"Article"> | string
    canonicalUrl?: StringNullableWithAggregatesFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    fetchedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    author?: StringNullableWithAggregatesFilter<"Article"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Article"> | string | null
    contentSnippet?: StringNullableWithAggregatesFilter<"Article"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Article"> | string | null
    topicCandidates?: StringWithAggregatesFilter<"Article"> | string
    hashTitle?: StringWithAggregatesFilter<"Article"> | string
    hashContent?: StringWithAggregatesFilter<"Article"> | string
    rankingScore?: FloatWithAggregatesFilter<"Article"> | number
    changeStatus?: StringWithAggregatesFilter<"Article"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type ClusterWhereInput = {
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    id?: StringFilter<"Cluster"> | string
    userId?: StringFilter<"Cluster"> | string
    lastIngestionRunId?: StringNullableFilter<"Cluster"> | string | null
    key?: StringFilter<"Cluster"> | string
    contentFingerprint?: StringNullableFilter<"Cluster"> | string | null
    headline?: StringNullableFilter<"Cluster"> | string | null
    summary?: StringNullableFilter<"Cluster"> | string | null
    whyItMatters?: StringNullableFilter<"Cluster"> | string | null
    whyRelevant?: StringNullableFilter<"Cluster"> | string | null
    summarySource?: StringFilter<"Cluster"> | string
    summaryModel?: StringNullableFilter<"Cluster"> | string | null
    tags?: StringFilter<"Cluster"> | string
    representativeTitle?: StringNullableFilter<"Cluster"> | string | null
    representativeUrl?: StringNullableFilter<"Cluster"> | string | null
    score?: FloatFilter<"Cluster"> | number
    sourceWeight?: FloatFilter<"Cluster"> | number
    novelty?: FloatFilter<"Cluster"> | number
    freshness?: FloatFilter<"Cluster"> | number
    topicRelevance?: FloatFilter<"Cluster"> | number
    changeStatus?: StringFilter<"Cluster"> | string
    createdAt?: DateTimeFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeFilter<"Cluster"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastIngestionRun?: XOR<IngestionRunNullableScalarRelationFilter, IngestionRunWhereInput> | null
    articles?: ClusterArticleListRelationFilter
  }

  export type ClusterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrderInput | SortOrder
    key?: SortOrder
    contentFingerprint?: SortOrderInput | SortOrder
    headline?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    whyItMatters?: SortOrderInput | SortOrder
    whyRelevant?: SortOrderInput | SortOrder
    summarySource?: SortOrder
    summaryModel?: SortOrderInput | SortOrder
    tags?: SortOrder
    representativeTitle?: SortOrderInput | SortOrder
    representativeUrl?: SortOrderInput | SortOrder
    score?: SortOrder
    sourceWeight?: SortOrder
    novelty?: SortOrder
    freshness?: SortOrder
    topicRelevance?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lastIngestionRun?: IngestionRunOrderByWithRelationInput
    articles?: ClusterArticleOrderByRelationAggregateInput
  }

  export type ClusterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_key?: ClusterUserIdKeyCompoundUniqueInput
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    userId?: StringFilter<"Cluster"> | string
    lastIngestionRunId?: StringNullableFilter<"Cluster"> | string | null
    key?: StringFilter<"Cluster"> | string
    contentFingerprint?: StringNullableFilter<"Cluster"> | string | null
    headline?: StringNullableFilter<"Cluster"> | string | null
    summary?: StringNullableFilter<"Cluster"> | string | null
    whyItMatters?: StringNullableFilter<"Cluster"> | string | null
    whyRelevant?: StringNullableFilter<"Cluster"> | string | null
    summarySource?: StringFilter<"Cluster"> | string
    summaryModel?: StringNullableFilter<"Cluster"> | string | null
    tags?: StringFilter<"Cluster"> | string
    representativeTitle?: StringNullableFilter<"Cluster"> | string | null
    representativeUrl?: StringNullableFilter<"Cluster"> | string | null
    score?: FloatFilter<"Cluster"> | number
    sourceWeight?: FloatFilter<"Cluster"> | number
    novelty?: FloatFilter<"Cluster"> | number
    freshness?: FloatFilter<"Cluster"> | number
    topicRelevance?: FloatFilter<"Cluster"> | number
    changeStatus?: StringFilter<"Cluster"> | string
    createdAt?: DateTimeFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeFilter<"Cluster"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastIngestionRun?: XOR<IngestionRunNullableScalarRelationFilter, IngestionRunWhereInput> | null
    articles?: ClusterArticleListRelationFilter
  }, "id" | "userId_key">

  export type ClusterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrderInput | SortOrder
    key?: SortOrder
    contentFingerprint?: SortOrderInput | SortOrder
    headline?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    whyItMatters?: SortOrderInput | SortOrder
    whyRelevant?: SortOrderInput | SortOrder
    summarySource?: SortOrder
    summaryModel?: SortOrderInput | SortOrder
    tags?: SortOrder
    representativeTitle?: SortOrderInput | SortOrder
    representativeUrl?: SortOrderInput | SortOrder
    score?: SortOrder
    sourceWeight?: SortOrder
    novelty?: SortOrder
    freshness?: SortOrder
    topicRelevance?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClusterCountOrderByAggregateInput
    _avg?: ClusterAvgOrderByAggregateInput
    _max?: ClusterMaxOrderByAggregateInput
    _min?: ClusterMinOrderByAggregateInput
    _sum?: ClusterSumOrderByAggregateInput
  }

  export type ClusterScalarWhereWithAggregatesInput = {
    AND?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    OR?: ClusterScalarWhereWithAggregatesInput[]
    NOT?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cluster"> | string
    userId?: StringWithAggregatesFilter<"Cluster"> | string
    lastIngestionRunId?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    key?: StringWithAggregatesFilter<"Cluster"> | string
    contentFingerprint?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    headline?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    whyItMatters?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    whyRelevant?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    summarySource?: StringWithAggregatesFilter<"Cluster"> | string
    summaryModel?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    tags?: StringWithAggregatesFilter<"Cluster"> | string
    representativeTitle?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    representativeUrl?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    score?: FloatWithAggregatesFilter<"Cluster"> | number
    sourceWeight?: FloatWithAggregatesFilter<"Cluster"> | number
    novelty?: FloatWithAggregatesFilter<"Cluster"> | number
    freshness?: FloatWithAggregatesFilter<"Cluster"> | number
    topicRelevance?: FloatWithAggregatesFilter<"Cluster"> | number
    changeStatus?: StringWithAggregatesFilter<"Cluster"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cluster"> | Date | string
  }

  export type ClusterArticleWhereInput = {
    AND?: ClusterArticleWhereInput | ClusterArticleWhereInput[]
    OR?: ClusterArticleWhereInput[]
    NOT?: ClusterArticleWhereInput | ClusterArticleWhereInput[]
    clusterId?: StringFilter<"ClusterArticle"> | string
    articleId?: StringFilter<"ClusterArticle"> | string
    position?: IntFilter<"ClusterArticle"> | number
    cluster?: XOR<ClusterScalarRelationFilter, ClusterWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type ClusterArticleOrderByWithRelationInput = {
    clusterId?: SortOrder
    articleId?: SortOrder
    position?: SortOrder
    cluster?: ClusterOrderByWithRelationInput
    article?: ArticleOrderByWithRelationInput
  }

  export type ClusterArticleWhereUniqueInput = Prisma.AtLeast<{
    clusterId_articleId?: ClusterArticleClusterIdArticleIdCompoundUniqueInput
    AND?: ClusterArticleWhereInput | ClusterArticleWhereInput[]
    OR?: ClusterArticleWhereInput[]
    NOT?: ClusterArticleWhereInput | ClusterArticleWhereInput[]
    clusterId?: StringFilter<"ClusterArticle"> | string
    articleId?: StringFilter<"ClusterArticle"> | string
    position?: IntFilter<"ClusterArticle"> | number
    cluster?: XOR<ClusterScalarRelationFilter, ClusterWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "clusterId_articleId">

  export type ClusterArticleOrderByWithAggregationInput = {
    clusterId?: SortOrder
    articleId?: SortOrder
    position?: SortOrder
    _count?: ClusterArticleCountOrderByAggregateInput
    _avg?: ClusterArticleAvgOrderByAggregateInput
    _max?: ClusterArticleMaxOrderByAggregateInput
    _min?: ClusterArticleMinOrderByAggregateInput
    _sum?: ClusterArticleSumOrderByAggregateInput
  }

  export type ClusterArticleScalarWhereWithAggregatesInput = {
    AND?: ClusterArticleScalarWhereWithAggregatesInput | ClusterArticleScalarWhereWithAggregatesInput[]
    OR?: ClusterArticleScalarWhereWithAggregatesInput[]
    NOT?: ClusterArticleScalarWhereWithAggregatesInput | ClusterArticleScalarWhereWithAggregatesInput[]
    clusterId?: StringWithAggregatesFilter<"ClusterArticle"> | string
    articleId?: StringWithAggregatesFilter<"ClusterArticle"> | string
    position?: IntWithAggregatesFilter<"ClusterArticle"> | number
  }

  export type PreferenceWhereInput = {
    AND?: PreferenceWhereInput | PreferenceWhereInput[]
    OR?: PreferenceWhereInput[]
    NOT?: PreferenceWhereInput | PreferenceWhereInput[]
    id?: StringFilter<"Preference"> | string
    userId?: StringFilter<"Preference"> | string
    topics?: StringFilter<"Preference"> | string
    mutedTopics?: StringFilter<"Preference"> | string
    tone?: StringFilter<"Preference"> | string
    useRemoteRss?: BoolFilter<"Preference"> | boolean
    useOpenAiSummaries?: BoolFilter<"Preference"> | boolean
    sourceWeights?: StringFilter<"Preference"> | string
    rankingWeights?: StringFilter<"Preference"> | string
    updatedAt?: DateTimeFilter<"Preference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topics?: SortOrder
    mutedTopics?: SortOrder
    tone?: SortOrder
    useRemoteRss?: SortOrder
    useOpenAiSummaries?: SortOrder
    sourceWeights?: SortOrder
    rankingWeights?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PreferenceWhereInput | PreferenceWhereInput[]
    OR?: PreferenceWhereInput[]
    NOT?: PreferenceWhereInput | PreferenceWhereInput[]
    topics?: StringFilter<"Preference"> | string
    mutedTopics?: StringFilter<"Preference"> | string
    tone?: StringFilter<"Preference"> | string
    useRemoteRss?: BoolFilter<"Preference"> | boolean
    useOpenAiSummaries?: BoolFilter<"Preference"> | boolean
    sourceWeights?: StringFilter<"Preference"> | string
    rankingWeights?: StringFilter<"Preference"> | string
    updatedAt?: DateTimeFilter<"Preference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topics?: SortOrder
    mutedTopics?: SortOrder
    tone?: SortOrder
    useRemoteRss?: SortOrder
    useOpenAiSummaries?: SortOrder
    sourceWeights?: SortOrder
    rankingWeights?: SortOrder
    updatedAt?: SortOrder
    _count?: PreferenceCountOrderByAggregateInput
    _max?: PreferenceMaxOrderByAggregateInput
    _min?: PreferenceMinOrderByAggregateInput
  }

  export type PreferenceScalarWhereWithAggregatesInput = {
    AND?: PreferenceScalarWhereWithAggregatesInput | PreferenceScalarWhereWithAggregatesInput[]
    OR?: PreferenceScalarWhereWithAggregatesInput[]
    NOT?: PreferenceScalarWhereWithAggregatesInput | PreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preference"> | string
    userId?: StringWithAggregatesFilter<"Preference"> | string
    topics?: StringWithAggregatesFilter<"Preference"> | string
    mutedTopics?: StringWithAggregatesFilter<"Preference"> | string
    tone?: StringWithAggregatesFilter<"Preference"> | string
    useRemoteRss?: BoolWithAggregatesFilter<"Preference"> | boolean
    useOpenAiSummaries?: BoolWithAggregatesFilter<"Preference"> | boolean
    sourceWeights?: StringWithAggregatesFilter<"Preference"> | string
    rankingWeights?: StringWithAggregatesFilter<"Preference"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Preference"> | Date | string
  }

  export type FeedSnapshotWhereInput = {
    AND?: FeedSnapshotWhereInput | FeedSnapshotWhereInput[]
    OR?: FeedSnapshotWhereInput[]
    NOT?: FeedSnapshotWhereInput | FeedSnapshotWhereInput[]
    id?: StringFilter<"FeedSnapshot"> | string
    userId?: StringFilter<"FeedSnapshot"> | string
    snapshotAt?: DateTimeFilter<"FeedSnapshot"> | Date | string
    clusterIds?: StringFilter<"FeedSnapshot"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeedSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    snapshotAt?: SortOrder
    clusterIds?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FeedSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedSnapshotWhereInput | FeedSnapshotWhereInput[]
    OR?: FeedSnapshotWhereInput[]
    NOT?: FeedSnapshotWhereInput | FeedSnapshotWhereInput[]
    userId?: StringFilter<"FeedSnapshot"> | string
    snapshotAt?: DateTimeFilter<"FeedSnapshot"> | Date | string
    clusterIds?: StringFilter<"FeedSnapshot"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FeedSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    snapshotAt?: SortOrder
    clusterIds?: SortOrder
    _count?: FeedSnapshotCountOrderByAggregateInput
    _max?: FeedSnapshotMaxOrderByAggregateInput
    _min?: FeedSnapshotMinOrderByAggregateInput
  }

  export type FeedSnapshotScalarWhereWithAggregatesInput = {
    AND?: FeedSnapshotScalarWhereWithAggregatesInput | FeedSnapshotScalarWhereWithAggregatesInput[]
    OR?: FeedSnapshotScalarWhereWithAggregatesInput[]
    NOT?: FeedSnapshotScalarWhereWithAggregatesInput | FeedSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedSnapshot"> | string
    userId?: StringWithAggregatesFilter<"FeedSnapshot"> | string
    snapshotAt?: DateTimeWithAggregatesFilter<"FeedSnapshot"> | Date | string
    clusterIds?: StringWithAggregatesFilter<"FeedSnapshot"> | string
  }

  export type InteractionWhereInput = {
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    id?: StringFilter<"Interaction"> | string
    userId?: StringFilter<"Interaction"> | string
    type?: StringFilter<"Interaction"> | string
    articleId?: StringNullableFilter<"Interaction"> | string | null
    clusterId?: StringNullableFilter<"Interaction"> | string | null
    metadata?: StringFilter<"Interaction"> | string
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InteractionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    articleId?: SortOrderInput | SortOrder
    clusterId?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    userId?: StringFilter<"Interaction"> | string
    type?: StringFilter<"Interaction"> | string
    articleId?: StringNullableFilter<"Interaction"> | string | null
    clusterId?: StringNullableFilter<"Interaction"> | string | null
    metadata?: StringFilter<"Interaction"> | string
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InteractionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    articleId?: SortOrderInput | SortOrder
    clusterId?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: InteractionCountOrderByAggregateInput
    _max?: InteractionMaxOrderByAggregateInput
    _min?: InteractionMinOrderByAggregateInput
  }

  export type InteractionScalarWhereWithAggregatesInput = {
    AND?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    OR?: InteractionScalarWhereWithAggregatesInput[]
    NOT?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interaction"> | string
    userId?: StringWithAggregatesFilter<"Interaction"> | string
    type?: StringWithAggregatesFilter<"Interaction"> | string
    articleId?: StringNullableWithAggregatesFilter<"Interaction"> | string | null
    clusterId?: StringNullableWithAggregatesFilter<"Interaction"> | string | null
    metadata?: StringWithAggregatesFilter<"Interaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Interaction"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    articles?: ArticleListRelationFilter
    clusters?: ClusterListRelationFilter
    preference?: XOR<PreferenceNullableScalarRelationFilter, PreferenceWhereInput> | null
    snapshots?: FeedSnapshotListRelationFilter
    ingestionRuns?: IngestionRunListRelationFilter
    interactions?: InteractionListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    clusters?: ClusterOrderByRelationAggregateInput
    preference?: PreferenceOrderByWithRelationInput
    snapshots?: FeedSnapshotOrderByRelationAggregateInput
    ingestionRuns?: IngestionRunOrderByRelationAggregateInput
    interactions?: InteractionOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    articles?: ArticleListRelationFilter
    clusters?: ClusterListRelationFilter
    preference?: XOR<PreferenceNullableScalarRelationFilter, PreferenceWhereInput> | null
    snapshots?: FeedSnapshotListRelationFilter
    ingestionRuns?: IngestionRunListRelationFilter
    interactions?: InteractionListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    tokenHash?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type IngestionRunWhereInput = {
    AND?: IngestionRunWhereInput | IngestionRunWhereInput[]
    OR?: IngestionRunWhereInput[]
    NOT?: IngestionRunWhereInput | IngestionRunWhereInput[]
    id?: StringFilter<"IngestionRun"> | string
    userId?: StringFilter<"IngestionRun"> | string
    status?: StringFilter<"IngestionRun"> | string
    mode?: StringFilter<"IngestionRun"> | string
    articleCount?: IntFilter<"IngestionRun"> | number
    dedupedCount?: IntFilter<"IngestionRun"> | number
    clusterCount?: IntFilter<"IngestionRun"> | number
    clusterState?: StringFilter<"IngestionRun"> | string
    startedAt?: DateTimeFilter<"IngestionRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"IngestionRun"> | Date | string | null
    createdAt?: DateTimeFilter<"IngestionRun"> | Date | string
    updatedAt?: DateTimeFilter<"IngestionRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articles?: ArticleListRelationFilter
    clusters?: ClusterListRelationFilter
    sourceFetches?: SourceFetchListRelationFilter
  }

  export type IngestionRunOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    articleCount?: SortOrder
    dedupedCount?: SortOrder
    clusterCount?: SortOrder
    clusterState?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    articles?: ArticleOrderByRelationAggregateInput
    clusters?: ClusterOrderByRelationAggregateInput
    sourceFetches?: SourceFetchOrderByRelationAggregateInput
  }

  export type IngestionRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngestionRunWhereInput | IngestionRunWhereInput[]
    OR?: IngestionRunWhereInput[]
    NOT?: IngestionRunWhereInput | IngestionRunWhereInput[]
    userId?: StringFilter<"IngestionRun"> | string
    status?: StringFilter<"IngestionRun"> | string
    mode?: StringFilter<"IngestionRun"> | string
    articleCount?: IntFilter<"IngestionRun"> | number
    dedupedCount?: IntFilter<"IngestionRun"> | number
    clusterCount?: IntFilter<"IngestionRun"> | number
    clusterState?: StringFilter<"IngestionRun"> | string
    startedAt?: DateTimeFilter<"IngestionRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"IngestionRun"> | Date | string | null
    createdAt?: DateTimeFilter<"IngestionRun"> | Date | string
    updatedAt?: DateTimeFilter<"IngestionRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articles?: ArticleListRelationFilter
    clusters?: ClusterListRelationFilter
    sourceFetches?: SourceFetchListRelationFilter
  }, "id">

  export type IngestionRunOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    articleCount?: SortOrder
    dedupedCount?: SortOrder
    clusterCount?: SortOrder
    clusterState?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IngestionRunCountOrderByAggregateInput
    _avg?: IngestionRunAvgOrderByAggregateInput
    _max?: IngestionRunMaxOrderByAggregateInput
    _min?: IngestionRunMinOrderByAggregateInput
    _sum?: IngestionRunSumOrderByAggregateInput
  }

  export type IngestionRunScalarWhereWithAggregatesInput = {
    AND?: IngestionRunScalarWhereWithAggregatesInput | IngestionRunScalarWhereWithAggregatesInput[]
    OR?: IngestionRunScalarWhereWithAggregatesInput[]
    NOT?: IngestionRunScalarWhereWithAggregatesInput | IngestionRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IngestionRun"> | string
    userId?: StringWithAggregatesFilter<"IngestionRun"> | string
    status?: StringWithAggregatesFilter<"IngestionRun"> | string
    mode?: StringWithAggregatesFilter<"IngestionRun"> | string
    articleCount?: IntWithAggregatesFilter<"IngestionRun"> | number
    dedupedCount?: IntWithAggregatesFilter<"IngestionRun"> | number
    clusterCount?: IntWithAggregatesFilter<"IngestionRun"> | number
    clusterState?: StringWithAggregatesFilter<"IngestionRun"> | string
    startedAt?: DateTimeWithAggregatesFilter<"IngestionRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"IngestionRun"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IngestionRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IngestionRun"> | Date | string
  }

  export type SourceFetchWhereInput = {
    AND?: SourceFetchWhereInput | SourceFetchWhereInput[]
    OR?: SourceFetchWhereInput[]
    NOT?: SourceFetchWhereInput | SourceFetchWhereInput[]
    id?: StringFilter<"SourceFetch"> | string
    ingestionRunId?: StringFilter<"SourceFetch"> | string
    sourceName?: StringFilter<"SourceFetch"> | string
    sourceUrl?: StringFilter<"SourceFetch"> | string
    mode?: StringFilter<"SourceFetch"> | string
    status?: StringFilter<"SourceFetch"> | string
    articleCount?: IntFilter<"SourceFetch"> | number
    latencyMs?: IntFilter<"SourceFetch"> | number
    errorMessage?: StringNullableFilter<"SourceFetch"> | string | null
    createdAt?: DateTimeFilter<"SourceFetch"> | Date | string
    ingestionRun?: XOR<IngestionRunScalarRelationFilter, IngestionRunWhereInput>
  }

  export type SourceFetchOrderByWithRelationInput = {
    id?: SortOrder
    ingestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    articleCount?: SortOrder
    latencyMs?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ingestionRun?: IngestionRunOrderByWithRelationInput
  }

  export type SourceFetchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceFetchWhereInput | SourceFetchWhereInput[]
    OR?: SourceFetchWhereInput[]
    NOT?: SourceFetchWhereInput | SourceFetchWhereInput[]
    ingestionRunId?: StringFilter<"SourceFetch"> | string
    sourceName?: StringFilter<"SourceFetch"> | string
    sourceUrl?: StringFilter<"SourceFetch"> | string
    mode?: StringFilter<"SourceFetch"> | string
    status?: StringFilter<"SourceFetch"> | string
    articleCount?: IntFilter<"SourceFetch"> | number
    latencyMs?: IntFilter<"SourceFetch"> | number
    errorMessage?: StringNullableFilter<"SourceFetch"> | string | null
    createdAt?: DateTimeFilter<"SourceFetch"> | Date | string
    ingestionRun?: XOR<IngestionRunScalarRelationFilter, IngestionRunWhereInput>
  }, "id">

  export type SourceFetchOrderByWithAggregationInput = {
    id?: SortOrder
    ingestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    articleCount?: SortOrder
    latencyMs?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SourceFetchCountOrderByAggregateInput
    _avg?: SourceFetchAvgOrderByAggregateInput
    _max?: SourceFetchMaxOrderByAggregateInput
    _min?: SourceFetchMinOrderByAggregateInput
    _sum?: SourceFetchSumOrderByAggregateInput
  }

  export type SourceFetchScalarWhereWithAggregatesInput = {
    AND?: SourceFetchScalarWhereWithAggregatesInput | SourceFetchScalarWhereWithAggregatesInput[]
    OR?: SourceFetchScalarWhereWithAggregatesInput[]
    NOT?: SourceFetchScalarWhereWithAggregatesInput | SourceFetchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SourceFetch"> | string
    ingestionRunId?: StringWithAggregatesFilter<"SourceFetch"> | string
    sourceName?: StringWithAggregatesFilter<"SourceFetch"> | string
    sourceUrl?: StringWithAggregatesFilter<"SourceFetch"> | string
    mode?: StringWithAggregatesFilter<"SourceFetch"> | string
    status?: StringWithAggregatesFilter<"SourceFetch"> | string
    articleCount?: IntWithAggregatesFilter<"SourceFetch"> | number
    latencyMs?: IntWithAggregatesFilter<"SourceFetch"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"SourceFetch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SourceFetch"> | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticlesInput
    lastIngestionRun?: IngestionRunCreateNestedOneWithoutArticlesInput
    clusterLinks?: ClusterArticleCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    userId: string
    lastIngestionRunId?: string | null
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clusterLinks?: ClusterArticleUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    lastIngestionRun?: IngestionRunUpdateOneWithoutArticlesNestedInput
    clusterLinks?: ClusterArticleUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterLinks?: ClusterArticleUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    userId: string
    lastIngestionRunId?: string | null
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterCreateInput = {
    id?: string
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClustersInput
    lastIngestionRun?: IngestionRunCreateNestedOneWithoutClustersInput
    articles?: ClusterArticleCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateInput = {
    id?: string
    userId: string
    lastIngestionRunId?: string | null
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ClusterArticleUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClustersNestedInput
    lastIngestionRun?: IngestionRunUpdateOneWithoutClustersNestedInput
    articles?: ClusterArticleUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ClusterArticleUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ClusterCreateManyInput = {
    id?: string
    userId: string
    lastIngestionRunId?: string | null
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterArticleCreateInput = {
    position?: number
    cluster: ClusterCreateNestedOneWithoutArticlesInput
    article: ArticleCreateNestedOneWithoutClusterLinksInput
  }

  export type ClusterArticleUncheckedCreateInput = {
    clusterId: string
    articleId: string
    position?: number
  }

  export type ClusterArticleUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    cluster?: ClusterUpdateOneRequiredWithoutArticlesNestedInput
    article?: ArticleUpdateOneRequiredWithoutClusterLinksNestedInput
  }

  export type ClusterArticleUncheckedUpdateInput = {
    clusterId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ClusterArticleCreateManyInput = {
    clusterId: string
    articleId: string
    position?: number
  }

  export type ClusterArticleUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ClusterArticleUncheckedUpdateManyInput = {
    clusterId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type PreferenceCreateInput = {
    id?: string
    topics: string
    mutedTopics: string
    tone?: string
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights: string
    rankingWeights: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferenceInput
  }

  export type PreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    topics: string
    mutedTopics: string
    tone?: string
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights: string
    rankingWeights: string
    updatedAt?: Date | string
  }

  export type PreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    mutedTopics?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    useRemoteRss?: BoolFieldUpdateOperationsInput | boolean
    useOpenAiSummaries?: BoolFieldUpdateOperationsInput | boolean
    sourceWeights?: StringFieldUpdateOperationsInput | string
    rankingWeights?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferenceNestedInput
  }

  export type PreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    mutedTopics?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    useRemoteRss?: BoolFieldUpdateOperationsInput | boolean
    useOpenAiSummaries?: BoolFieldUpdateOperationsInput | boolean
    sourceWeights?: StringFieldUpdateOperationsInput | string
    rankingWeights?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceCreateManyInput = {
    id?: string
    userId: string
    topics: string
    mutedTopics: string
    tone?: string
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights: string
    rankingWeights: string
    updatedAt?: Date | string
  }

  export type PreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    mutedTopics?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    useRemoteRss?: BoolFieldUpdateOperationsInput | boolean
    useOpenAiSummaries?: BoolFieldUpdateOperationsInput | boolean
    sourceWeights?: StringFieldUpdateOperationsInput | string
    rankingWeights?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    mutedTopics?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    useRemoteRss?: BoolFieldUpdateOperationsInput | boolean
    useOpenAiSummaries?: BoolFieldUpdateOperationsInput | boolean
    sourceWeights?: StringFieldUpdateOperationsInput | string
    rankingWeights?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedSnapshotCreateInput = {
    id?: string
    snapshotAt?: Date | string
    clusterIds: string
    user: UserCreateNestedOneWithoutSnapshotsInput
  }

  export type FeedSnapshotUncheckedCreateInput = {
    id?: string
    userId: string
    snapshotAt?: Date | string
    clusterIds: string
  }

  export type FeedSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterIds?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type FeedSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterIds?: StringFieldUpdateOperationsInput | string
  }

  export type FeedSnapshotCreateManyInput = {
    id?: string
    userId: string
    snapshotAt?: Date | string
    clusterIds: string
  }

  export type FeedSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterIds?: StringFieldUpdateOperationsInput | string
  }

  export type FeedSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterIds?: StringFieldUpdateOperationsInput | string
  }

  export type InteractionCreateInput = {
    id?: string
    type: string
    articleId?: string | null
    clusterId?: string | null
    metadata: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    articleId?: string | null
    clusterId?: string | null
    metadata: string
    createdAt?: Date | string
  }

  export type InteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateManyInput = {
    id?: string
    userId: string
    type: string
    articleId?: string | null
    clusterId?: string | null
    metadata: string
    createdAt?: Date | string
  }

  export type InteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    clusters?: ClusterCreateNestedManyWithoutUserInput
    preference?: PreferenceCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutUserInput
    preference?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotUncheckedCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    clusters?: ClusterUpdateManyWithoutUserNestedInput
    preference?: PreferenceUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutUserNestedInput
    preference?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestionRunCreateInput = {
    id?: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIngestionRunsInput
    articles?: ArticleCreateNestedManyWithoutLastIngestionRunInput
    clusters?: ClusterCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunUncheckedCreateInput = {
    id?: string
    userId: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutLastIngestionRunInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchUncheckedCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIngestionRunsNestedInput
    articles?: ArticleUpdateManyWithoutLastIngestionRunNestedInput
    clusters?: ClusterUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUpdateManyWithoutIngestionRunNestedInput
  }

  export type IngestionRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutLastIngestionRunNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUncheckedUpdateManyWithoutIngestionRunNestedInput
  }

  export type IngestionRunCreateManyInput = {
    id?: string
    userId: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngestionRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestionRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceFetchCreateInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    mode: string
    status: string
    articleCount?: number
    latencyMs: number
    errorMessage?: string | null
    createdAt?: Date | string
    ingestionRun: IngestionRunCreateNestedOneWithoutSourceFetchesInput
  }

  export type SourceFetchUncheckedCreateInput = {
    id?: string
    ingestionRunId: string
    sourceName: string
    sourceUrl: string
    mode: string
    status: string
    articleCount?: number
    latencyMs: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type SourceFetchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestionRun?: IngestionRunUpdateOneRequiredWithoutSourceFetchesNestedInput
  }

  export type SourceFetchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingestionRunId?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceFetchCreateManyInput = {
    id?: string
    ingestionRunId: string
    sourceName: string
    sourceUrl: string
    mode: string
    status: string
    articleCount?: number
    latencyMs: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type SourceFetchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceFetchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingestionRunId?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IngestionRunNullableScalarRelationFilter = {
    is?: IngestionRunWhereInput | null
    isNot?: IngestionRunWhereInput | null
  }

  export type ClusterArticleListRelationFilter = {
    every?: ClusterArticleWhereInput
    some?: ClusterArticleWhereInput
    none?: ClusterArticleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClusterArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleUserIdUrlCompoundUniqueInput = {
    userId: string
    url: string
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    url?: SortOrder
    canonicalUrl?: SortOrder
    publishedAt?: SortOrder
    fetchedAt?: SortOrder
    author?: SortOrder
    summary?: SortOrder
    contentSnippet?: SortOrder
    imageUrl?: SortOrder
    topicCandidates?: SortOrder
    hashTitle?: SortOrder
    hashContent?: SortOrder
    rankingScore?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    rankingScore?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    url?: SortOrder
    canonicalUrl?: SortOrder
    publishedAt?: SortOrder
    fetchedAt?: SortOrder
    author?: SortOrder
    summary?: SortOrder
    contentSnippet?: SortOrder
    imageUrl?: SortOrder
    topicCandidates?: SortOrder
    hashTitle?: SortOrder
    hashContent?: SortOrder
    rankingScore?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    url?: SortOrder
    canonicalUrl?: SortOrder
    publishedAt?: SortOrder
    fetchedAt?: SortOrder
    author?: SortOrder
    summary?: SortOrder
    contentSnippet?: SortOrder
    imageUrl?: SortOrder
    topicCandidates?: SortOrder
    hashTitle?: SortOrder
    hashContent?: SortOrder
    rankingScore?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    rankingScore?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClusterUserIdKeyCompoundUniqueInput = {
    userId: string
    key: string
  }

  export type ClusterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrder
    key?: SortOrder
    contentFingerprint?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    whyRelevant?: SortOrder
    summarySource?: SortOrder
    summaryModel?: SortOrder
    tags?: SortOrder
    representativeTitle?: SortOrder
    representativeUrl?: SortOrder
    score?: SortOrder
    sourceWeight?: SortOrder
    novelty?: SortOrder
    freshness?: SortOrder
    topicRelevance?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterAvgOrderByAggregateInput = {
    score?: SortOrder
    sourceWeight?: SortOrder
    novelty?: SortOrder
    freshness?: SortOrder
    topicRelevance?: SortOrder
  }

  export type ClusterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrder
    key?: SortOrder
    contentFingerprint?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    whyRelevant?: SortOrder
    summarySource?: SortOrder
    summaryModel?: SortOrder
    tags?: SortOrder
    representativeTitle?: SortOrder
    representativeUrl?: SortOrder
    score?: SortOrder
    sourceWeight?: SortOrder
    novelty?: SortOrder
    freshness?: SortOrder
    topicRelevance?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lastIngestionRunId?: SortOrder
    key?: SortOrder
    contentFingerprint?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    whyRelevant?: SortOrder
    summarySource?: SortOrder
    summaryModel?: SortOrder
    tags?: SortOrder
    representativeTitle?: SortOrder
    representativeUrl?: SortOrder
    score?: SortOrder
    sourceWeight?: SortOrder
    novelty?: SortOrder
    freshness?: SortOrder
    topicRelevance?: SortOrder
    changeStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterSumOrderByAggregateInput = {
    score?: SortOrder
    sourceWeight?: SortOrder
    novelty?: SortOrder
    freshness?: SortOrder
    topicRelevance?: SortOrder
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

  export type ClusterScalarRelationFilter = {
    is?: ClusterWhereInput
    isNot?: ClusterWhereInput
  }

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type ClusterArticleClusterIdArticleIdCompoundUniqueInput = {
    clusterId: string
    articleId: string
  }

  export type ClusterArticleCountOrderByAggregateInput = {
    clusterId?: SortOrder
    articleId?: SortOrder
    position?: SortOrder
  }

  export type ClusterArticleAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ClusterArticleMaxOrderByAggregateInput = {
    clusterId?: SortOrder
    articleId?: SortOrder
    position?: SortOrder
  }

  export type ClusterArticleMinOrderByAggregateInput = {
    clusterId?: SortOrder
    articleId?: SortOrder
    position?: SortOrder
  }

  export type ClusterArticleSumOrderByAggregateInput = {
    position?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topics?: SortOrder
    mutedTopics?: SortOrder
    tone?: SortOrder
    useRemoteRss?: SortOrder
    useOpenAiSummaries?: SortOrder
    sourceWeights?: SortOrder
    rankingWeights?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topics?: SortOrder
    mutedTopics?: SortOrder
    tone?: SortOrder
    useRemoteRss?: SortOrder
    useOpenAiSummaries?: SortOrder
    sourceWeights?: SortOrder
    rankingWeights?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topics?: SortOrder
    mutedTopics?: SortOrder
    tone?: SortOrder
    useRemoteRss?: SortOrder
    useOpenAiSummaries?: SortOrder
    sourceWeights?: SortOrder
    rankingWeights?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FeedSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snapshotAt?: SortOrder
    clusterIds?: SortOrder
  }

  export type FeedSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snapshotAt?: SortOrder
    clusterIds?: SortOrder
  }

  export type FeedSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snapshotAt?: SortOrder
    clusterIds?: SortOrder
  }

  export type InteractionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    articleId?: SortOrder
    clusterId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    articleId?: SortOrder
    clusterId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    articleId?: SortOrder
    clusterId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ClusterListRelationFilter = {
    every?: ClusterWhereInput
    some?: ClusterWhereInput
    none?: ClusterWhereInput
  }

  export type PreferenceNullableScalarRelationFilter = {
    is?: PreferenceWhereInput | null
    isNot?: PreferenceWhereInput | null
  }

  export type FeedSnapshotListRelationFilter = {
    every?: FeedSnapshotWhereInput
    some?: FeedSnapshotWhereInput
    none?: FeedSnapshotWhereInput
  }

  export type IngestionRunListRelationFilter = {
    every?: IngestionRunWhereInput
    some?: IngestionRunWhereInput
    none?: IngestionRunWhereInput
  }

  export type InteractionListRelationFilter = {
    every?: InteractionWhereInput
    some?: InteractionWhereInput
    none?: InteractionWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClusterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngestionRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceFetchListRelationFilter = {
    every?: SourceFetchWhereInput
    some?: SourceFetchWhereInput
    none?: SourceFetchWhereInput
  }

  export type SourceFetchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngestionRunCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    articleCount?: SortOrder
    dedupedCount?: SortOrder
    clusterCount?: SortOrder
    clusterState?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestionRunAvgOrderByAggregateInput = {
    articleCount?: SortOrder
    dedupedCount?: SortOrder
    clusterCount?: SortOrder
  }

  export type IngestionRunMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    articleCount?: SortOrder
    dedupedCount?: SortOrder
    clusterCount?: SortOrder
    clusterState?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestionRunMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    articleCount?: SortOrder
    dedupedCount?: SortOrder
    clusterCount?: SortOrder
    clusterState?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngestionRunSumOrderByAggregateInput = {
    articleCount?: SortOrder
    dedupedCount?: SortOrder
    clusterCount?: SortOrder
  }

  export type IngestionRunScalarRelationFilter = {
    is?: IngestionRunWhereInput
    isNot?: IngestionRunWhereInput
  }

  export type SourceFetchCountOrderByAggregateInput = {
    id?: SortOrder
    ingestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    articleCount?: SortOrder
    latencyMs?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type SourceFetchAvgOrderByAggregateInput = {
    articleCount?: SortOrder
    latencyMs?: SortOrder
  }

  export type SourceFetchMaxOrderByAggregateInput = {
    id?: SortOrder
    ingestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    articleCount?: SortOrder
    latencyMs?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type SourceFetchMinOrderByAggregateInput = {
    id?: SortOrder
    ingestionRunId?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    articleCount?: SortOrder
    latencyMs?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type SourceFetchSumOrderByAggregateInput = {
    articleCount?: SortOrder
    latencyMs?: SortOrder
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type IngestionRunCreateNestedOneWithoutArticlesInput = {
    create?: XOR<IngestionRunCreateWithoutArticlesInput, IngestionRunUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: IngestionRunCreateOrConnectWithoutArticlesInput
    connect?: IngestionRunWhereUniqueInput
  }

  export type ClusterArticleCreateNestedManyWithoutArticleInput = {
    create?: XOR<ClusterArticleCreateWithoutArticleInput, ClusterArticleUncheckedCreateWithoutArticleInput> | ClusterArticleCreateWithoutArticleInput[] | ClusterArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutArticleInput | ClusterArticleCreateOrConnectWithoutArticleInput[]
    createMany?: ClusterArticleCreateManyArticleInputEnvelope
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
  }

  export type ClusterArticleUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ClusterArticleCreateWithoutArticleInput, ClusterArticleUncheckedCreateWithoutArticleInput> | ClusterArticleCreateWithoutArticleInput[] | ClusterArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutArticleInput | ClusterArticleCreateOrConnectWithoutArticleInput[]
    createMany?: ClusterArticleCreateManyArticleInputEnvelope
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type IngestionRunUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<IngestionRunCreateWithoutArticlesInput, IngestionRunUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: IngestionRunCreateOrConnectWithoutArticlesInput
    upsert?: IngestionRunUpsertWithoutArticlesInput
    disconnect?: IngestionRunWhereInput | boolean
    delete?: IngestionRunWhereInput | boolean
    connect?: IngestionRunWhereUniqueInput
    update?: XOR<XOR<IngestionRunUpdateToOneWithWhereWithoutArticlesInput, IngestionRunUpdateWithoutArticlesInput>, IngestionRunUncheckedUpdateWithoutArticlesInput>
  }

  export type ClusterArticleUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ClusterArticleCreateWithoutArticleInput, ClusterArticleUncheckedCreateWithoutArticleInput> | ClusterArticleCreateWithoutArticleInput[] | ClusterArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutArticleInput | ClusterArticleCreateOrConnectWithoutArticleInput[]
    upsert?: ClusterArticleUpsertWithWhereUniqueWithoutArticleInput | ClusterArticleUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ClusterArticleCreateManyArticleInputEnvelope
    set?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    disconnect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    delete?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    update?: ClusterArticleUpdateWithWhereUniqueWithoutArticleInput | ClusterArticleUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ClusterArticleUpdateManyWithWhereWithoutArticleInput | ClusterArticleUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ClusterArticleScalarWhereInput | ClusterArticleScalarWhereInput[]
  }

  export type ClusterArticleUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ClusterArticleCreateWithoutArticleInput, ClusterArticleUncheckedCreateWithoutArticleInput> | ClusterArticleCreateWithoutArticleInput[] | ClusterArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutArticleInput | ClusterArticleCreateOrConnectWithoutArticleInput[]
    upsert?: ClusterArticleUpsertWithWhereUniqueWithoutArticleInput | ClusterArticleUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ClusterArticleCreateManyArticleInputEnvelope
    set?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    disconnect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    delete?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    update?: ClusterArticleUpdateWithWhereUniqueWithoutArticleInput | ClusterArticleUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ClusterArticleUpdateManyWithWhereWithoutArticleInput | ClusterArticleUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ClusterArticleScalarWhereInput | ClusterArticleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClustersInput = {
    create?: XOR<UserCreateWithoutClustersInput, UserUncheckedCreateWithoutClustersInput>
    connectOrCreate?: UserCreateOrConnectWithoutClustersInput
    connect?: UserWhereUniqueInput
  }

  export type IngestionRunCreateNestedOneWithoutClustersInput = {
    create?: XOR<IngestionRunCreateWithoutClustersInput, IngestionRunUncheckedCreateWithoutClustersInput>
    connectOrCreate?: IngestionRunCreateOrConnectWithoutClustersInput
    connect?: IngestionRunWhereUniqueInput
  }

  export type ClusterArticleCreateNestedManyWithoutClusterInput = {
    create?: XOR<ClusterArticleCreateWithoutClusterInput, ClusterArticleUncheckedCreateWithoutClusterInput> | ClusterArticleCreateWithoutClusterInput[] | ClusterArticleUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutClusterInput | ClusterArticleCreateOrConnectWithoutClusterInput[]
    createMany?: ClusterArticleCreateManyClusterInputEnvelope
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
  }

  export type ClusterArticleUncheckedCreateNestedManyWithoutClusterInput = {
    create?: XOR<ClusterArticleCreateWithoutClusterInput, ClusterArticleUncheckedCreateWithoutClusterInput> | ClusterArticleCreateWithoutClusterInput[] | ClusterArticleUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutClusterInput | ClusterArticleCreateOrConnectWithoutClusterInput[]
    createMany?: ClusterArticleCreateManyClusterInputEnvelope
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClustersNestedInput = {
    create?: XOR<UserCreateWithoutClustersInput, UserUncheckedCreateWithoutClustersInput>
    connectOrCreate?: UserCreateOrConnectWithoutClustersInput
    upsert?: UserUpsertWithoutClustersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClustersInput, UserUpdateWithoutClustersInput>, UserUncheckedUpdateWithoutClustersInput>
  }

  export type IngestionRunUpdateOneWithoutClustersNestedInput = {
    create?: XOR<IngestionRunCreateWithoutClustersInput, IngestionRunUncheckedCreateWithoutClustersInput>
    connectOrCreate?: IngestionRunCreateOrConnectWithoutClustersInput
    upsert?: IngestionRunUpsertWithoutClustersInput
    disconnect?: IngestionRunWhereInput | boolean
    delete?: IngestionRunWhereInput | boolean
    connect?: IngestionRunWhereUniqueInput
    update?: XOR<XOR<IngestionRunUpdateToOneWithWhereWithoutClustersInput, IngestionRunUpdateWithoutClustersInput>, IngestionRunUncheckedUpdateWithoutClustersInput>
  }

  export type ClusterArticleUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ClusterArticleCreateWithoutClusterInput, ClusterArticleUncheckedCreateWithoutClusterInput> | ClusterArticleCreateWithoutClusterInput[] | ClusterArticleUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutClusterInput | ClusterArticleCreateOrConnectWithoutClusterInput[]
    upsert?: ClusterArticleUpsertWithWhereUniqueWithoutClusterInput | ClusterArticleUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ClusterArticleCreateManyClusterInputEnvelope
    set?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    disconnect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    delete?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    update?: ClusterArticleUpdateWithWhereUniqueWithoutClusterInput | ClusterArticleUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ClusterArticleUpdateManyWithWhereWithoutClusterInput | ClusterArticleUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ClusterArticleScalarWhereInput | ClusterArticleScalarWhereInput[]
  }

  export type ClusterArticleUncheckedUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ClusterArticleCreateWithoutClusterInput, ClusterArticleUncheckedCreateWithoutClusterInput> | ClusterArticleCreateWithoutClusterInput[] | ClusterArticleUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ClusterArticleCreateOrConnectWithoutClusterInput | ClusterArticleCreateOrConnectWithoutClusterInput[]
    upsert?: ClusterArticleUpsertWithWhereUniqueWithoutClusterInput | ClusterArticleUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ClusterArticleCreateManyClusterInputEnvelope
    set?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    disconnect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    delete?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    connect?: ClusterArticleWhereUniqueInput | ClusterArticleWhereUniqueInput[]
    update?: ClusterArticleUpdateWithWhereUniqueWithoutClusterInput | ClusterArticleUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ClusterArticleUpdateManyWithWhereWithoutClusterInput | ClusterArticleUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ClusterArticleScalarWhereInput | ClusterArticleScalarWhereInput[]
  }

  export type ClusterCreateNestedOneWithoutArticlesInput = {
    create?: XOR<ClusterCreateWithoutArticlesInput, ClusterUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutArticlesInput
    connect?: ClusterWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutClusterLinksInput = {
    create?: XOR<ArticleCreateWithoutClusterLinksInput, ArticleUncheckedCreateWithoutClusterLinksInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutClusterLinksInput
    connect?: ArticleWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClusterUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<ClusterCreateWithoutArticlesInput, ClusterUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutArticlesInput
    upsert?: ClusterUpsertWithoutArticlesInput
    connect?: ClusterWhereUniqueInput
    update?: XOR<XOR<ClusterUpdateToOneWithWhereWithoutArticlesInput, ClusterUpdateWithoutArticlesInput>, ClusterUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleUpdateOneRequiredWithoutClusterLinksNestedInput = {
    create?: XOR<ArticleCreateWithoutClusterLinksInput, ArticleUncheckedCreateWithoutClusterLinksInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutClusterLinksInput
    upsert?: ArticleUpsertWithoutClusterLinksInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutClusterLinksInput, ArticleUpdateWithoutClusterLinksInput>, ArticleUncheckedUpdateWithoutClusterLinksInput>
  }

  export type UserCreateNestedOneWithoutPreferenceInput = {
    create?: XOR<UserCreateWithoutPreferenceInput, UserUncheckedCreateWithoutPreferenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferenceInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPreferenceNestedInput = {
    create?: XOR<UserCreateWithoutPreferenceInput, UserUncheckedCreateWithoutPreferenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferenceInput
    upsert?: UserUpsertWithoutPreferenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferenceInput, UserUpdateWithoutPreferenceInput>, UserUncheckedUpdateWithoutPreferenceInput>
  }

  export type UserCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<UserCreateWithoutSnapshotsInput, UserUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnapshotsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<UserCreateWithoutSnapshotsInput, UserUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnapshotsInput
    upsert?: UserUpsertWithoutSnapshotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSnapshotsInput, UserUpdateWithoutSnapshotsInput>, UserUncheckedUpdateWithoutSnapshotsInput>
  }

  export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    upsert?: UserUpsertWithoutInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInteractionsInput, UserUpdateWithoutInteractionsInput>, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type ArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ClusterCreateNestedManyWithoutUserInput = {
    create?: XOR<ClusterCreateWithoutUserInput, ClusterUncheckedCreateWithoutUserInput> | ClusterCreateWithoutUserInput[] | ClusterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutUserInput | ClusterCreateOrConnectWithoutUserInput[]
    createMany?: ClusterCreateManyUserInputEnvelope
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
  }

  export type PreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    connect?: PreferenceWhereUniqueInput
  }

  export type FeedSnapshotCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedSnapshotCreateWithoutUserInput, FeedSnapshotUncheckedCreateWithoutUserInput> | FeedSnapshotCreateWithoutUserInput[] | FeedSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedSnapshotCreateOrConnectWithoutUserInput | FeedSnapshotCreateOrConnectWithoutUserInput[]
    createMany?: FeedSnapshotCreateManyUserInputEnvelope
    connect?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
  }

  export type IngestionRunCreateNestedManyWithoutUserInput = {
    create?: XOR<IngestionRunCreateWithoutUserInput, IngestionRunUncheckedCreateWithoutUserInput> | IngestionRunCreateWithoutUserInput[] | IngestionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngestionRunCreateOrConnectWithoutUserInput | IngestionRunCreateOrConnectWithoutUserInput[]
    createMany?: IngestionRunCreateManyUserInputEnvelope
    connect?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
  }

  export type InteractionCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ClusterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClusterCreateWithoutUserInput, ClusterUncheckedCreateWithoutUserInput> | ClusterCreateWithoutUserInput[] | ClusterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutUserInput | ClusterCreateOrConnectWithoutUserInput[]
    createMany?: ClusterCreateManyUserInputEnvelope
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
  }

  export type PreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    connect?: PreferenceWhereUniqueInput
  }

  export type FeedSnapshotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedSnapshotCreateWithoutUserInput, FeedSnapshotUncheckedCreateWithoutUserInput> | FeedSnapshotCreateWithoutUserInput[] | FeedSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedSnapshotCreateOrConnectWithoutUserInput | FeedSnapshotCreateOrConnectWithoutUserInput[]
    createMany?: FeedSnapshotCreateManyUserInputEnvelope
    connect?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
  }

  export type IngestionRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IngestionRunCreateWithoutUserInput, IngestionRunUncheckedCreateWithoutUserInput> | IngestionRunCreateWithoutUserInput[] | IngestionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngestionRunCreateOrConnectWithoutUserInput | IngestionRunCreateOrConnectWithoutUserInput[]
    createMany?: IngestionRunCreateManyUserInputEnvelope
    connect?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
  }

  export type InteractionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ClusterUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClusterCreateWithoutUserInput, ClusterUncheckedCreateWithoutUserInput> | ClusterCreateWithoutUserInput[] | ClusterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutUserInput | ClusterCreateOrConnectWithoutUserInput[]
    upsert?: ClusterUpsertWithWhereUniqueWithoutUserInput | ClusterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClusterCreateManyUserInputEnvelope
    set?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    disconnect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    delete?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    update?: ClusterUpdateWithWhereUniqueWithoutUserInput | ClusterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClusterUpdateManyWithWhereWithoutUserInput | ClusterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClusterScalarWhereInput | ClusterScalarWhereInput[]
  }

  export type PreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    upsert?: PreferenceUpsertWithoutUserInput
    disconnect?: PreferenceWhereInput | boolean
    delete?: PreferenceWhereInput | boolean
    connect?: PreferenceWhereUniqueInput
    update?: XOR<XOR<PreferenceUpdateToOneWithWhereWithoutUserInput, PreferenceUpdateWithoutUserInput>, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type FeedSnapshotUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedSnapshotCreateWithoutUserInput, FeedSnapshotUncheckedCreateWithoutUserInput> | FeedSnapshotCreateWithoutUserInput[] | FeedSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedSnapshotCreateOrConnectWithoutUserInput | FeedSnapshotCreateOrConnectWithoutUserInput[]
    upsert?: FeedSnapshotUpsertWithWhereUniqueWithoutUserInput | FeedSnapshotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedSnapshotCreateManyUserInputEnvelope
    set?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    disconnect?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    delete?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    connect?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    update?: FeedSnapshotUpdateWithWhereUniqueWithoutUserInput | FeedSnapshotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedSnapshotUpdateManyWithWhereWithoutUserInput | FeedSnapshotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedSnapshotScalarWhereInput | FeedSnapshotScalarWhereInput[]
  }

  export type IngestionRunUpdateManyWithoutUserNestedInput = {
    create?: XOR<IngestionRunCreateWithoutUserInput, IngestionRunUncheckedCreateWithoutUserInput> | IngestionRunCreateWithoutUserInput[] | IngestionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngestionRunCreateOrConnectWithoutUserInput | IngestionRunCreateOrConnectWithoutUserInput[]
    upsert?: IngestionRunUpsertWithWhereUniqueWithoutUserInput | IngestionRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IngestionRunCreateManyUserInputEnvelope
    set?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    disconnect?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    delete?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    connect?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    update?: IngestionRunUpdateWithWhereUniqueWithoutUserInput | IngestionRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IngestionRunUpdateManyWithWhereWithoutUserInput | IngestionRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IngestionRunScalarWhereInput | IngestionRunScalarWhereInput[]
  }

  export type InteractionUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ClusterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClusterCreateWithoutUserInput, ClusterUncheckedCreateWithoutUserInput> | ClusterCreateWithoutUserInput[] | ClusterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutUserInput | ClusterCreateOrConnectWithoutUserInput[]
    upsert?: ClusterUpsertWithWhereUniqueWithoutUserInput | ClusterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClusterCreateManyUserInputEnvelope
    set?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    disconnect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    delete?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    update?: ClusterUpdateWithWhereUniqueWithoutUserInput | ClusterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClusterUpdateManyWithWhereWithoutUserInput | ClusterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClusterScalarWhereInput | ClusterScalarWhereInput[]
  }

  export type PreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    upsert?: PreferenceUpsertWithoutUserInput
    disconnect?: PreferenceWhereInput | boolean
    delete?: PreferenceWhereInput | boolean
    connect?: PreferenceWhereUniqueInput
    update?: XOR<XOR<PreferenceUpdateToOneWithWhereWithoutUserInput, PreferenceUpdateWithoutUserInput>, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedSnapshotCreateWithoutUserInput, FeedSnapshotUncheckedCreateWithoutUserInput> | FeedSnapshotCreateWithoutUserInput[] | FeedSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedSnapshotCreateOrConnectWithoutUserInput | FeedSnapshotCreateOrConnectWithoutUserInput[]
    upsert?: FeedSnapshotUpsertWithWhereUniqueWithoutUserInput | FeedSnapshotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedSnapshotCreateManyUserInputEnvelope
    set?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    disconnect?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    delete?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    connect?: FeedSnapshotWhereUniqueInput | FeedSnapshotWhereUniqueInput[]
    update?: FeedSnapshotUpdateWithWhereUniqueWithoutUserInput | FeedSnapshotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedSnapshotUpdateManyWithWhereWithoutUserInput | FeedSnapshotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedSnapshotScalarWhereInput | FeedSnapshotScalarWhereInput[]
  }

  export type IngestionRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IngestionRunCreateWithoutUserInput, IngestionRunUncheckedCreateWithoutUserInput> | IngestionRunCreateWithoutUserInput[] | IngestionRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngestionRunCreateOrConnectWithoutUserInput | IngestionRunCreateOrConnectWithoutUserInput[]
    upsert?: IngestionRunUpsertWithWhereUniqueWithoutUserInput | IngestionRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IngestionRunCreateManyUserInputEnvelope
    set?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    disconnect?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    delete?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    connect?: IngestionRunWhereUniqueInput | IngestionRunWhereUniqueInput[]
    update?: IngestionRunUpdateWithWhereUniqueWithoutUserInput | IngestionRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IngestionRunUpdateManyWithWhereWithoutUserInput | IngestionRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IngestionRunScalarWhereInput | IngestionRunScalarWhereInput[]
  }

  export type InteractionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutIngestionRunsInput = {
    create?: XOR<UserCreateWithoutIngestionRunsInput, UserUncheckedCreateWithoutIngestionRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngestionRunsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleCreateNestedManyWithoutLastIngestionRunInput = {
    create?: XOR<ArticleCreateWithoutLastIngestionRunInput, ArticleUncheckedCreateWithoutLastIngestionRunInput> | ArticleCreateWithoutLastIngestionRunInput[] | ArticleUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLastIngestionRunInput | ArticleCreateOrConnectWithoutLastIngestionRunInput[]
    createMany?: ArticleCreateManyLastIngestionRunInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ClusterCreateNestedManyWithoutLastIngestionRunInput = {
    create?: XOR<ClusterCreateWithoutLastIngestionRunInput, ClusterUncheckedCreateWithoutLastIngestionRunInput> | ClusterCreateWithoutLastIngestionRunInput[] | ClusterUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutLastIngestionRunInput | ClusterCreateOrConnectWithoutLastIngestionRunInput[]
    createMany?: ClusterCreateManyLastIngestionRunInputEnvelope
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
  }

  export type SourceFetchCreateNestedManyWithoutIngestionRunInput = {
    create?: XOR<SourceFetchCreateWithoutIngestionRunInput, SourceFetchUncheckedCreateWithoutIngestionRunInput> | SourceFetchCreateWithoutIngestionRunInput[] | SourceFetchUncheckedCreateWithoutIngestionRunInput[]
    connectOrCreate?: SourceFetchCreateOrConnectWithoutIngestionRunInput | SourceFetchCreateOrConnectWithoutIngestionRunInput[]
    createMany?: SourceFetchCreateManyIngestionRunInputEnvelope
    connect?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutLastIngestionRunInput = {
    create?: XOR<ArticleCreateWithoutLastIngestionRunInput, ArticleUncheckedCreateWithoutLastIngestionRunInput> | ArticleCreateWithoutLastIngestionRunInput[] | ArticleUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLastIngestionRunInput | ArticleCreateOrConnectWithoutLastIngestionRunInput[]
    createMany?: ArticleCreateManyLastIngestionRunInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ClusterUncheckedCreateNestedManyWithoutLastIngestionRunInput = {
    create?: XOR<ClusterCreateWithoutLastIngestionRunInput, ClusterUncheckedCreateWithoutLastIngestionRunInput> | ClusterCreateWithoutLastIngestionRunInput[] | ClusterUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutLastIngestionRunInput | ClusterCreateOrConnectWithoutLastIngestionRunInput[]
    createMany?: ClusterCreateManyLastIngestionRunInputEnvelope
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
  }

  export type SourceFetchUncheckedCreateNestedManyWithoutIngestionRunInput = {
    create?: XOR<SourceFetchCreateWithoutIngestionRunInput, SourceFetchUncheckedCreateWithoutIngestionRunInput> | SourceFetchCreateWithoutIngestionRunInput[] | SourceFetchUncheckedCreateWithoutIngestionRunInput[]
    connectOrCreate?: SourceFetchCreateOrConnectWithoutIngestionRunInput | SourceFetchCreateOrConnectWithoutIngestionRunInput[]
    createMany?: SourceFetchCreateManyIngestionRunInputEnvelope
    connect?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutIngestionRunsNestedInput = {
    create?: XOR<UserCreateWithoutIngestionRunsInput, UserUncheckedCreateWithoutIngestionRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngestionRunsInput
    upsert?: UserUpsertWithoutIngestionRunsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIngestionRunsInput, UserUpdateWithoutIngestionRunsInput>, UserUncheckedUpdateWithoutIngestionRunsInput>
  }

  export type ArticleUpdateManyWithoutLastIngestionRunNestedInput = {
    create?: XOR<ArticleCreateWithoutLastIngestionRunInput, ArticleUncheckedCreateWithoutLastIngestionRunInput> | ArticleCreateWithoutLastIngestionRunInput[] | ArticleUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLastIngestionRunInput | ArticleCreateOrConnectWithoutLastIngestionRunInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutLastIngestionRunInput | ArticleUpsertWithWhereUniqueWithoutLastIngestionRunInput[]
    createMany?: ArticleCreateManyLastIngestionRunInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutLastIngestionRunInput | ArticleUpdateWithWhereUniqueWithoutLastIngestionRunInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutLastIngestionRunInput | ArticleUpdateManyWithWhereWithoutLastIngestionRunInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ClusterUpdateManyWithoutLastIngestionRunNestedInput = {
    create?: XOR<ClusterCreateWithoutLastIngestionRunInput, ClusterUncheckedCreateWithoutLastIngestionRunInput> | ClusterCreateWithoutLastIngestionRunInput[] | ClusterUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutLastIngestionRunInput | ClusterCreateOrConnectWithoutLastIngestionRunInput[]
    upsert?: ClusterUpsertWithWhereUniqueWithoutLastIngestionRunInput | ClusterUpsertWithWhereUniqueWithoutLastIngestionRunInput[]
    createMany?: ClusterCreateManyLastIngestionRunInputEnvelope
    set?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    disconnect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    delete?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    update?: ClusterUpdateWithWhereUniqueWithoutLastIngestionRunInput | ClusterUpdateWithWhereUniqueWithoutLastIngestionRunInput[]
    updateMany?: ClusterUpdateManyWithWhereWithoutLastIngestionRunInput | ClusterUpdateManyWithWhereWithoutLastIngestionRunInput[]
    deleteMany?: ClusterScalarWhereInput | ClusterScalarWhereInput[]
  }

  export type SourceFetchUpdateManyWithoutIngestionRunNestedInput = {
    create?: XOR<SourceFetchCreateWithoutIngestionRunInput, SourceFetchUncheckedCreateWithoutIngestionRunInput> | SourceFetchCreateWithoutIngestionRunInput[] | SourceFetchUncheckedCreateWithoutIngestionRunInput[]
    connectOrCreate?: SourceFetchCreateOrConnectWithoutIngestionRunInput | SourceFetchCreateOrConnectWithoutIngestionRunInput[]
    upsert?: SourceFetchUpsertWithWhereUniqueWithoutIngestionRunInput | SourceFetchUpsertWithWhereUniqueWithoutIngestionRunInput[]
    createMany?: SourceFetchCreateManyIngestionRunInputEnvelope
    set?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    disconnect?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    delete?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    connect?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    update?: SourceFetchUpdateWithWhereUniqueWithoutIngestionRunInput | SourceFetchUpdateWithWhereUniqueWithoutIngestionRunInput[]
    updateMany?: SourceFetchUpdateManyWithWhereWithoutIngestionRunInput | SourceFetchUpdateManyWithWhereWithoutIngestionRunInput[]
    deleteMany?: SourceFetchScalarWhereInput | SourceFetchScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutLastIngestionRunNestedInput = {
    create?: XOR<ArticleCreateWithoutLastIngestionRunInput, ArticleUncheckedCreateWithoutLastIngestionRunInput> | ArticleCreateWithoutLastIngestionRunInput[] | ArticleUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLastIngestionRunInput | ArticleCreateOrConnectWithoutLastIngestionRunInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutLastIngestionRunInput | ArticleUpsertWithWhereUniqueWithoutLastIngestionRunInput[]
    createMany?: ArticleCreateManyLastIngestionRunInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutLastIngestionRunInput | ArticleUpdateWithWhereUniqueWithoutLastIngestionRunInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutLastIngestionRunInput | ArticleUpdateManyWithWhereWithoutLastIngestionRunInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ClusterUncheckedUpdateManyWithoutLastIngestionRunNestedInput = {
    create?: XOR<ClusterCreateWithoutLastIngestionRunInput, ClusterUncheckedCreateWithoutLastIngestionRunInput> | ClusterCreateWithoutLastIngestionRunInput[] | ClusterUncheckedCreateWithoutLastIngestionRunInput[]
    connectOrCreate?: ClusterCreateOrConnectWithoutLastIngestionRunInput | ClusterCreateOrConnectWithoutLastIngestionRunInput[]
    upsert?: ClusterUpsertWithWhereUniqueWithoutLastIngestionRunInput | ClusterUpsertWithWhereUniqueWithoutLastIngestionRunInput[]
    createMany?: ClusterCreateManyLastIngestionRunInputEnvelope
    set?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    disconnect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    delete?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    connect?: ClusterWhereUniqueInput | ClusterWhereUniqueInput[]
    update?: ClusterUpdateWithWhereUniqueWithoutLastIngestionRunInput | ClusterUpdateWithWhereUniqueWithoutLastIngestionRunInput[]
    updateMany?: ClusterUpdateManyWithWhereWithoutLastIngestionRunInput | ClusterUpdateManyWithWhereWithoutLastIngestionRunInput[]
    deleteMany?: ClusterScalarWhereInput | ClusterScalarWhereInput[]
  }

  export type SourceFetchUncheckedUpdateManyWithoutIngestionRunNestedInput = {
    create?: XOR<SourceFetchCreateWithoutIngestionRunInput, SourceFetchUncheckedCreateWithoutIngestionRunInput> | SourceFetchCreateWithoutIngestionRunInput[] | SourceFetchUncheckedCreateWithoutIngestionRunInput[]
    connectOrCreate?: SourceFetchCreateOrConnectWithoutIngestionRunInput | SourceFetchCreateOrConnectWithoutIngestionRunInput[]
    upsert?: SourceFetchUpsertWithWhereUniqueWithoutIngestionRunInput | SourceFetchUpsertWithWhereUniqueWithoutIngestionRunInput[]
    createMany?: SourceFetchCreateManyIngestionRunInputEnvelope
    set?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    disconnect?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    delete?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    connect?: SourceFetchWhereUniqueInput | SourceFetchWhereUniqueInput[]
    update?: SourceFetchUpdateWithWhereUniqueWithoutIngestionRunInput | SourceFetchUpdateWithWhereUniqueWithoutIngestionRunInput[]
    updateMany?: SourceFetchUpdateManyWithWhereWithoutIngestionRunInput | SourceFetchUpdateManyWithWhereWithoutIngestionRunInput[]
    deleteMany?: SourceFetchScalarWhereInput | SourceFetchScalarWhereInput[]
  }

  export type IngestionRunCreateNestedOneWithoutSourceFetchesInput = {
    create?: XOR<IngestionRunCreateWithoutSourceFetchesInput, IngestionRunUncheckedCreateWithoutSourceFetchesInput>
    connectOrCreate?: IngestionRunCreateOrConnectWithoutSourceFetchesInput
    connect?: IngestionRunWhereUniqueInput
  }

  export type IngestionRunUpdateOneRequiredWithoutSourceFetchesNestedInput = {
    create?: XOR<IngestionRunCreateWithoutSourceFetchesInput, IngestionRunUncheckedCreateWithoutSourceFetchesInput>
    connectOrCreate?: IngestionRunCreateOrConnectWithoutSourceFetchesInput
    upsert?: IngestionRunUpsertWithoutSourceFetchesInput
    connect?: IngestionRunWhereUniqueInput
    update?: XOR<XOR<IngestionRunUpdateToOneWithWhereWithoutSourceFetchesInput, IngestionRunUpdateWithoutSourceFetchesInput>, IngestionRunUncheckedUpdateWithoutSourceFetchesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clusters?: ClusterCreateNestedManyWithoutUserInput
    preference?: PreferenceCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clusters?: ClusterUncheckedCreateNestedManyWithoutUserInput
    preference?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotUncheckedCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type IngestionRunCreateWithoutArticlesInput = {
    id?: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIngestionRunsInput
    clusters?: ClusterCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunUncheckedCreateWithoutArticlesInput = {
    id?: string
    userId: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clusters?: ClusterUncheckedCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchUncheckedCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunCreateOrConnectWithoutArticlesInput = {
    where: IngestionRunWhereUniqueInput
    create: XOR<IngestionRunCreateWithoutArticlesInput, IngestionRunUncheckedCreateWithoutArticlesInput>
  }

  export type ClusterArticleCreateWithoutArticleInput = {
    position?: number
    cluster: ClusterCreateNestedOneWithoutArticlesInput
  }

  export type ClusterArticleUncheckedCreateWithoutArticleInput = {
    clusterId: string
    position?: number
  }

  export type ClusterArticleCreateOrConnectWithoutArticleInput = {
    where: ClusterArticleWhereUniqueInput
    create: XOR<ClusterArticleCreateWithoutArticleInput, ClusterArticleUncheckedCreateWithoutArticleInput>
  }

  export type ClusterArticleCreateManyArticleInputEnvelope = {
    data: ClusterArticleCreateManyArticleInput | ClusterArticleCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: ClusterUpdateManyWithoutUserNestedInput
    preference?: PreferenceUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: ClusterUncheckedUpdateManyWithoutUserNestedInput
    preference?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IngestionRunUpsertWithoutArticlesInput = {
    update: XOR<IngestionRunUpdateWithoutArticlesInput, IngestionRunUncheckedUpdateWithoutArticlesInput>
    create: XOR<IngestionRunCreateWithoutArticlesInput, IngestionRunUncheckedCreateWithoutArticlesInput>
    where?: IngestionRunWhereInput
  }

  export type IngestionRunUpdateToOneWithWhereWithoutArticlesInput = {
    where?: IngestionRunWhereInput
    data: XOR<IngestionRunUpdateWithoutArticlesInput, IngestionRunUncheckedUpdateWithoutArticlesInput>
  }

  export type IngestionRunUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIngestionRunsNestedInput
    clusters?: ClusterUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUpdateManyWithoutIngestionRunNestedInput
  }

  export type IngestionRunUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: ClusterUncheckedUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUncheckedUpdateManyWithoutIngestionRunNestedInput
  }

  export type ClusterArticleUpsertWithWhereUniqueWithoutArticleInput = {
    where: ClusterArticleWhereUniqueInput
    update: XOR<ClusterArticleUpdateWithoutArticleInput, ClusterArticleUncheckedUpdateWithoutArticleInput>
    create: XOR<ClusterArticleCreateWithoutArticleInput, ClusterArticleUncheckedCreateWithoutArticleInput>
  }

  export type ClusterArticleUpdateWithWhereUniqueWithoutArticleInput = {
    where: ClusterArticleWhereUniqueInput
    data: XOR<ClusterArticleUpdateWithoutArticleInput, ClusterArticleUncheckedUpdateWithoutArticleInput>
  }

  export type ClusterArticleUpdateManyWithWhereWithoutArticleInput = {
    where: ClusterArticleScalarWhereInput
    data: XOR<ClusterArticleUpdateManyMutationInput, ClusterArticleUncheckedUpdateManyWithoutArticleInput>
  }

  export type ClusterArticleScalarWhereInput = {
    AND?: ClusterArticleScalarWhereInput | ClusterArticleScalarWhereInput[]
    OR?: ClusterArticleScalarWhereInput[]
    NOT?: ClusterArticleScalarWhereInput | ClusterArticleScalarWhereInput[]
    clusterId?: StringFilter<"ClusterArticle"> | string
    articleId?: StringFilter<"ClusterArticle"> | string
    position?: IntFilter<"ClusterArticle"> | number
  }

  export type UserCreateWithoutClustersInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    preference?: PreferenceCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClustersInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    preference?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotUncheckedCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClustersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClustersInput, UserUncheckedCreateWithoutClustersInput>
  }

  export type IngestionRunCreateWithoutClustersInput = {
    id?: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIngestionRunsInput
    articles?: ArticleCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunUncheckedCreateWithoutClustersInput = {
    id?: string
    userId: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchUncheckedCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunCreateOrConnectWithoutClustersInput = {
    where: IngestionRunWhereUniqueInput
    create: XOR<IngestionRunCreateWithoutClustersInput, IngestionRunUncheckedCreateWithoutClustersInput>
  }

  export type ClusterArticleCreateWithoutClusterInput = {
    position?: number
    article: ArticleCreateNestedOneWithoutClusterLinksInput
  }

  export type ClusterArticleUncheckedCreateWithoutClusterInput = {
    articleId: string
    position?: number
  }

  export type ClusterArticleCreateOrConnectWithoutClusterInput = {
    where: ClusterArticleWhereUniqueInput
    create: XOR<ClusterArticleCreateWithoutClusterInput, ClusterArticleUncheckedCreateWithoutClusterInput>
  }

  export type ClusterArticleCreateManyClusterInputEnvelope = {
    data: ClusterArticleCreateManyClusterInput | ClusterArticleCreateManyClusterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClustersInput = {
    update: XOR<UserUpdateWithoutClustersInput, UserUncheckedUpdateWithoutClustersInput>
    create: XOR<UserCreateWithoutClustersInput, UserUncheckedCreateWithoutClustersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClustersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClustersInput, UserUncheckedUpdateWithoutClustersInput>
  }

  export type UserUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    preference?: PreferenceUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    preference?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IngestionRunUpsertWithoutClustersInput = {
    update: XOR<IngestionRunUpdateWithoutClustersInput, IngestionRunUncheckedUpdateWithoutClustersInput>
    create: XOR<IngestionRunCreateWithoutClustersInput, IngestionRunUncheckedCreateWithoutClustersInput>
    where?: IngestionRunWhereInput
  }

  export type IngestionRunUpdateToOneWithWhereWithoutClustersInput = {
    where?: IngestionRunWhereInput
    data: XOR<IngestionRunUpdateWithoutClustersInput, IngestionRunUncheckedUpdateWithoutClustersInput>
  }

  export type IngestionRunUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIngestionRunsNestedInput
    articles?: ArticleUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUpdateManyWithoutIngestionRunNestedInput
  }

  export type IngestionRunUncheckedUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUncheckedUpdateManyWithoutIngestionRunNestedInput
  }

  export type ClusterArticleUpsertWithWhereUniqueWithoutClusterInput = {
    where: ClusterArticleWhereUniqueInput
    update: XOR<ClusterArticleUpdateWithoutClusterInput, ClusterArticleUncheckedUpdateWithoutClusterInput>
    create: XOR<ClusterArticleCreateWithoutClusterInput, ClusterArticleUncheckedCreateWithoutClusterInput>
  }

  export type ClusterArticleUpdateWithWhereUniqueWithoutClusterInput = {
    where: ClusterArticleWhereUniqueInput
    data: XOR<ClusterArticleUpdateWithoutClusterInput, ClusterArticleUncheckedUpdateWithoutClusterInput>
  }

  export type ClusterArticleUpdateManyWithWhereWithoutClusterInput = {
    where: ClusterArticleScalarWhereInput
    data: XOR<ClusterArticleUpdateManyMutationInput, ClusterArticleUncheckedUpdateManyWithoutClusterInput>
  }

  export type ClusterCreateWithoutArticlesInput = {
    id?: string
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClustersInput
    lastIngestionRun?: IngestionRunCreateNestedOneWithoutClustersInput
  }

  export type ClusterUncheckedCreateWithoutArticlesInput = {
    id?: string
    userId: string
    lastIngestionRunId?: string | null
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterCreateOrConnectWithoutArticlesInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutArticlesInput, ClusterUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleCreateWithoutClusterLinksInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticlesInput
    lastIngestionRun?: IngestionRunCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutClusterLinksInput = {
    id?: string
    userId: string
    lastIngestionRunId?: string | null
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutClusterLinksInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutClusterLinksInput, ArticleUncheckedCreateWithoutClusterLinksInput>
  }

  export type ClusterUpsertWithoutArticlesInput = {
    update: XOR<ClusterUpdateWithoutArticlesInput, ClusterUncheckedUpdateWithoutArticlesInput>
    create: XOR<ClusterCreateWithoutArticlesInput, ClusterUncheckedCreateWithoutArticlesInput>
    where?: ClusterWhereInput
  }

  export type ClusterUpdateToOneWithWhereWithoutArticlesInput = {
    where?: ClusterWhereInput
    data: XOR<ClusterUpdateWithoutArticlesInput, ClusterUncheckedUpdateWithoutArticlesInput>
  }

  export type ClusterUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClustersNestedInput
    lastIngestionRun?: IngestionRunUpdateOneWithoutClustersNestedInput
  }

  export type ClusterUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUpsertWithoutClusterLinksInput = {
    update: XOR<ArticleUpdateWithoutClusterLinksInput, ArticleUncheckedUpdateWithoutClusterLinksInput>
    create: XOR<ArticleCreateWithoutClusterLinksInput, ArticleUncheckedCreateWithoutClusterLinksInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutClusterLinksInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutClusterLinksInput, ArticleUncheckedUpdateWithoutClusterLinksInput>
  }

  export type ArticleUpdateWithoutClusterLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    lastIngestionRun?: IngestionRunUpdateOneWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutClusterLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPreferenceInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    clusters?: ClusterCreateNestedManyWithoutUserInput
    snapshots?: FeedSnapshotCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferenceInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutUserInput
    snapshots?: FeedSnapshotUncheckedCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferenceInput, UserUncheckedCreateWithoutPreferenceInput>
  }

  export type UserUpsertWithoutPreferenceInput = {
    update: XOR<UserUpdateWithoutPreferenceInput, UserUncheckedUpdateWithoutPreferenceInput>
    create: XOR<UserCreateWithoutPreferenceInput, UserUncheckedCreateWithoutPreferenceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferenceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferenceInput, UserUncheckedUpdateWithoutPreferenceInput>
  }

  export type UserUpdateWithoutPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    clusters?: ClusterUpdateManyWithoutUserNestedInput
    snapshots?: FeedSnapshotUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutUserNestedInput
    snapshots?: FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSnapshotsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    clusters?: ClusterCreateNestedManyWithoutUserInput
    preference?: PreferenceCreateNestedOneWithoutUserInput
    ingestionRuns?: IngestionRunCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutUserInput
    preference?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    ingestionRuns?: IngestionRunUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSnapshotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSnapshotsInput, UserUncheckedCreateWithoutSnapshotsInput>
  }

  export type UserUpsertWithoutSnapshotsInput = {
    update: XOR<UserUpdateWithoutSnapshotsInput, UserUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<UserCreateWithoutSnapshotsInput, UserUncheckedCreateWithoutSnapshotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSnapshotsInput, UserUncheckedUpdateWithoutSnapshotsInput>
  }

  export type UserUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    clusters?: ClusterUpdateManyWithoutUserNestedInput
    preference?: PreferenceUpdateOneWithoutUserNestedInput
    ingestionRuns?: IngestionRunUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutUserNestedInput
    preference?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    ingestionRuns?: IngestionRunUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInteractionsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    clusters?: ClusterCreateNestedManyWithoutUserInput
    preference?: PreferenceCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInteractionsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutUserInput
    preference?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotUncheckedCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
  }

  export type UserUpsertWithoutInteractionsInput = {
    update: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    clusters?: ClusterUpdateManyWithoutUserNestedInput
    preference?: PreferenceUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutUserNestedInput
    preference?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleCreateWithoutUserInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastIngestionRun?: IngestionRunCreateNestedOneWithoutArticlesInput
    clusterLinks?: ClusterArticleCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutUserInput = {
    id?: string
    lastIngestionRunId?: string | null
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clusterLinks?: ClusterArticleUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutUserInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleCreateManyUserInputEnvelope = {
    data: ArticleCreateManyUserInput | ArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClusterCreateWithoutUserInput = {
    id?: string
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastIngestionRun?: IngestionRunCreateNestedOneWithoutClustersInput
    articles?: ClusterArticleCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateWithoutUserInput = {
    id?: string
    lastIngestionRunId?: string | null
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ClusterArticleUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterCreateOrConnectWithoutUserInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutUserInput, ClusterUncheckedCreateWithoutUserInput>
  }

  export type ClusterCreateManyUserInputEnvelope = {
    data: ClusterCreateManyUserInput | ClusterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PreferenceCreateWithoutUserInput = {
    id?: string
    topics: string
    mutedTopics: string
    tone?: string
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights: string
    rankingWeights: string
    updatedAt?: Date | string
  }

  export type PreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    topics: string
    mutedTopics: string
    tone?: string
    useRemoteRss?: boolean
    useOpenAiSummaries?: boolean
    sourceWeights: string
    rankingWeights: string
    updatedAt?: Date | string
  }

  export type PreferenceCreateOrConnectWithoutUserInput = {
    where: PreferenceWhereUniqueInput
    create: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
  }

  export type FeedSnapshotCreateWithoutUserInput = {
    id?: string
    snapshotAt?: Date | string
    clusterIds: string
  }

  export type FeedSnapshotUncheckedCreateWithoutUserInput = {
    id?: string
    snapshotAt?: Date | string
    clusterIds: string
  }

  export type FeedSnapshotCreateOrConnectWithoutUserInput = {
    where: FeedSnapshotWhereUniqueInput
    create: XOR<FeedSnapshotCreateWithoutUserInput, FeedSnapshotUncheckedCreateWithoutUserInput>
  }

  export type FeedSnapshotCreateManyUserInputEnvelope = {
    data: FeedSnapshotCreateManyUserInput | FeedSnapshotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IngestionRunCreateWithoutUserInput = {
    id?: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutLastIngestionRunInput
    clusters?: ClusterCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunUncheckedCreateWithoutUserInput = {
    id?: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutLastIngestionRunInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutLastIngestionRunInput
    sourceFetches?: SourceFetchUncheckedCreateNestedManyWithoutIngestionRunInput
  }

  export type IngestionRunCreateOrConnectWithoutUserInput = {
    where: IngestionRunWhereUniqueInput
    create: XOR<IngestionRunCreateWithoutUserInput, IngestionRunUncheckedCreateWithoutUserInput>
  }

  export type IngestionRunCreateManyUserInputEnvelope = {
    data: IngestionRunCreateManyUserInput | IngestionRunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InteractionCreateWithoutUserInput = {
    id?: string
    type: string
    articleId?: string | null
    clusterId?: string | null
    metadata: string
    createdAt?: Date | string
  }

  export type InteractionUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    articleId?: string | null
    clusterId?: string | null
    metadata: string
    createdAt?: Date | string
  }

  export type InteractionCreateOrConnectWithoutUserInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionCreateManyUserInputEnvelope = {
    data: InteractionCreateManyUserInput | InteractionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
  }

  export type ArticleUpdateManyWithWhereWithoutUserInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    userId?: StringFilter<"Article"> | string
    lastIngestionRunId?: StringNullableFilter<"Article"> | string | null
    sourceName?: StringFilter<"Article"> | string
    sourceUrl?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    url?: StringFilter<"Article"> | string
    canonicalUrl?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    fetchedAt?: DateTimeFilter<"Article"> | Date | string
    author?: StringNullableFilter<"Article"> | string | null
    summary?: StringNullableFilter<"Article"> | string | null
    contentSnippet?: StringNullableFilter<"Article"> | string | null
    imageUrl?: StringNullableFilter<"Article"> | string | null
    topicCandidates?: StringFilter<"Article"> | string
    hashTitle?: StringFilter<"Article"> | string
    hashContent?: StringFilter<"Article"> | string
    rankingScore?: FloatFilter<"Article"> | number
    changeStatus?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type ClusterUpsertWithWhereUniqueWithoutUserInput = {
    where: ClusterWhereUniqueInput
    update: XOR<ClusterUpdateWithoutUserInput, ClusterUncheckedUpdateWithoutUserInput>
    create: XOR<ClusterCreateWithoutUserInput, ClusterUncheckedCreateWithoutUserInput>
  }

  export type ClusterUpdateWithWhereUniqueWithoutUserInput = {
    where: ClusterWhereUniqueInput
    data: XOR<ClusterUpdateWithoutUserInput, ClusterUncheckedUpdateWithoutUserInput>
  }

  export type ClusterUpdateManyWithWhereWithoutUserInput = {
    where: ClusterScalarWhereInput
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyWithoutUserInput>
  }

  export type ClusterScalarWhereInput = {
    AND?: ClusterScalarWhereInput | ClusterScalarWhereInput[]
    OR?: ClusterScalarWhereInput[]
    NOT?: ClusterScalarWhereInput | ClusterScalarWhereInput[]
    id?: StringFilter<"Cluster"> | string
    userId?: StringFilter<"Cluster"> | string
    lastIngestionRunId?: StringNullableFilter<"Cluster"> | string | null
    key?: StringFilter<"Cluster"> | string
    contentFingerprint?: StringNullableFilter<"Cluster"> | string | null
    headline?: StringNullableFilter<"Cluster"> | string | null
    summary?: StringNullableFilter<"Cluster"> | string | null
    whyItMatters?: StringNullableFilter<"Cluster"> | string | null
    whyRelevant?: StringNullableFilter<"Cluster"> | string | null
    summarySource?: StringFilter<"Cluster"> | string
    summaryModel?: StringNullableFilter<"Cluster"> | string | null
    tags?: StringFilter<"Cluster"> | string
    representativeTitle?: StringNullableFilter<"Cluster"> | string | null
    representativeUrl?: StringNullableFilter<"Cluster"> | string | null
    score?: FloatFilter<"Cluster"> | number
    sourceWeight?: FloatFilter<"Cluster"> | number
    novelty?: FloatFilter<"Cluster"> | number
    freshness?: FloatFilter<"Cluster"> | number
    topicRelevance?: FloatFilter<"Cluster"> | number
    changeStatus?: StringFilter<"Cluster"> | string
    createdAt?: DateTimeFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeFilter<"Cluster"> | Date | string
  }

  export type PreferenceUpsertWithoutUserInput = {
    update: XOR<PreferenceUpdateWithoutUserInput, PreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    where?: PreferenceWhereInput
  }

  export type PreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: PreferenceWhereInput
    data: XOR<PreferenceUpdateWithoutUserInput, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type PreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    mutedTopics?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    useRemoteRss?: BoolFieldUpdateOperationsInput | boolean
    useOpenAiSummaries?: BoolFieldUpdateOperationsInput | boolean
    sourceWeights?: StringFieldUpdateOperationsInput | string
    rankingWeights?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    mutedTopics?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    useRemoteRss?: BoolFieldUpdateOperationsInput | boolean
    useOpenAiSummaries?: BoolFieldUpdateOperationsInput | boolean
    sourceWeights?: StringFieldUpdateOperationsInput | string
    rankingWeights?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedSnapshotUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedSnapshotWhereUniqueInput
    update: XOR<FeedSnapshotUpdateWithoutUserInput, FeedSnapshotUncheckedUpdateWithoutUserInput>
    create: XOR<FeedSnapshotCreateWithoutUserInput, FeedSnapshotUncheckedCreateWithoutUserInput>
  }

  export type FeedSnapshotUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedSnapshotWhereUniqueInput
    data: XOR<FeedSnapshotUpdateWithoutUserInput, FeedSnapshotUncheckedUpdateWithoutUserInput>
  }

  export type FeedSnapshotUpdateManyWithWhereWithoutUserInput = {
    where: FeedSnapshotScalarWhereInput
    data: XOR<FeedSnapshotUpdateManyMutationInput, FeedSnapshotUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedSnapshotScalarWhereInput = {
    AND?: FeedSnapshotScalarWhereInput | FeedSnapshotScalarWhereInput[]
    OR?: FeedSnapshotScalarWhereInput[]
    NOT?: FeedSnapshotScalarWhereInput | FeedSnapshotScalarWhereInput[]
    id?: StringFilter<"FeedSnapshot"> | string
    userId?: StringFilter<"FeedSnapshot"> | string
    snapshotAt?: DateTimeFilter<"FeedSnapshot"> | Date | string
    clusterIds?: StringFilter<"FeedSnapshot"> | string
  }

  export type IngestionRunUpsertWithWhereUniqueWithoutUserInput = {
    where: IngestionRunWhereUniqueInput
    update: XOR<IngestionRunUpdateWithoutUserInput, IngestionRunUncheckedUpdateWithoutUserInput>
    create: XOR<IngestionRunCreateWithoutUserInput, IngestionRunUncheckedCreateWithoutUserInput>
  }

  export type IngestionRunUpdateWithWhereUniqueWithoutUserInput = {
    where: IngestionRunWhereUniqueInput
    data: XOR<IngestionRunUpdateWithoutUserInput, IngestionRunUncheckedUpdateWithoutUserInput>
  }

  export type IngestionRunUpdateManyWithWhereWithoutUserInput = {
    where: IngestionRunScalarWhereInput
    data: XOR<IngestionRunUpdateManyMutationInput, IngestionRunUncheckedUpdateManyWithoutUserInput>
  }

  export type IngestionRunScalarWhereInput = {
    AND?: IngestionRunScalarWhereInput | IngestionRunScalarWhereInput[]
    OR?: IngestionRunScalarWhereInput[]
    NOT?: IngestionRunScalarWhereInput | IngestionRunScalarWhereInput[]
    id?: StringFilter<"IngestionRun"> | string
    userId?: StringFilter<"IngestionRun"> | string
    status?: StringFilter<"IngestionRun"> | string
    mode?: StringFilter<"IngestionRun"> | string
    articleCount?: IntFilter<"IngestionRun"> | number
    dedupedCount?: IntFilter<"IngestionRun"> | number
    clusterCount?: IntFilter<"IngestionRun"> | number
    clusterState?: StringFilter<"IngestionRun"> | string
    startedAt?: DateTimeFilter<"IngestionRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"IngestionRun"> | Date | string | null
    createdAt?: DateTimeFilter<"IngestionRun"> | Date | string
    updatedAt?: DateTimeFilter<"IngestionRun"> | Date | string
  }

  export type InteractionUpsertWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
  }

  export type InteractionUpdateManyWithWhereWithoutUserInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutUserInput>
  }

  export type InteractionScalarWhereInput = {
    AND?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    OR?: InteractionScalarWhereInput[]
    NOT?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    id?: StringFilter<"Interaction"> | string
    userId?: StringFilter<"Interaction"> | string
    type?: StringFilter<"Interaction"> | string
    articleId?: StringNullableFilter<"Interaction"> | string | null
    clusterId?: StringNullableFilter<"Interaction"> | string | null
    metadata?: StringFilter<"Interaction"> | string
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    clusters?: ClusterCreateNestedManyWithoutUserInput
    preference?: PreferenceCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutUserInput
    preference?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotUncheckedCreateNestedManyWithoutUserInput
    ingestionRuns?: IngestionRunUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    clusters?: ClusterUpdateManyWithoutUserNestedInput
    preference?: PreferenceUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutUserNestedInput
    preference?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput
    ingestionRuns?: IngestionRunUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIngestionRunsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    clusters?: ClusterCreateNestedManyWithoutUserInput
    preference?: PreferenceCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIngestionRunsInput = {
    id?: string
    username: string
    displayName: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutUserInput
    preference?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    snapshots?: FeedSnapshotUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIngestionRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIngestionRunsInput, UserUncheckedCreateWithoutIngestionRunsInput>
  }

  export type ArticleCreateWithoutLastIngestionRunInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticlesInput
    clusterLinks?: ClusterArticleCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutLastIngestionRunInput = {
    id?: string
    userId: string
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clusterLinks?: ClusterArticleUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutLastIngestionRunInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutLastIngestionRunInput, ArticleUncheckedCreateWithoutLastIngestionRunInput>
  }

  export type ArticleCreateManyLastIngestionRunInputEnvelope = {
    data: ArticleCreateManyLastIngestionRunInput | ArticleCreateManyLastIngestionRunInput[]
    skipDuplicates?: boolean
  }

  export type ClusterCreateWithoutLastIngestionRunInput = {
    id?: string
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClustersInput
    articles?: ClusterArticleCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateWithoutLastIngestionRunInput = {
    id?: string
    userId: string
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ClusterArticleUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterCreateOrConnectWithoutLastIngestionRunInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutLastIngestionRunInput, ClusterUncheckedCreateWithoutLastIngestionRunInput>
  }

  export type ClusterCreateManyLastIngestionRunInputEnvelope = {
    data: ClusterCreateManyLastIngestionRunInput | ClusterCreateManyLastIngestionRunInput[]
    skipDuplicates?: boolean
  }

  export type SourceFetchCreateWithoutIngestionRunInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    mode: string
    status: string
    articleCount?: number
    latencyMs: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type SourceFetchUncheckedCreateWithoutIngestionRunInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    mode: string
    status: string
    articleCount?: number
    latencyMs: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type SourceFetchCreateOrConnectWithoutIngestionRunInput = {
    where: SourceFetchWhereUniqueInput
    create: XOR<SourceFetchCreateWithoutIngestionRunInput, SourceFetchUncheckedCreateWithoutIngestionRunInput>
  }

  export type SourceFetchCreateManyIngestionRunInputEnvelope = {
    data: SourceFetchCreateManyIngestionRunInput | SourceFetchCreateManyIngestionRunInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIngestionRunsInput = {
    update: XOR<UserUpdateWithoutIngestionRunsInput, UserUncheckedUpdateWithoutIngestionRunsInput>
    create: XOR<UserCreateWithoutIngestionRunsInput, UserUncheckedCreateWithoutIngestionRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIngestionRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIngestionRunsInput, UserUncheckedUpdateWithoutIngestionRunsInput>
  }

  export type UserUpdateWithoutIngestionRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    clusters?: ClusterUpdateManyWithoutUserNestedInput
    preference?: PreferenceUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIngestionRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutUserNestedInput
    preference?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    snapshots?: FeedSnapshotUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleUpsertWithWhereUniqueWithoutLastIngestionRunInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutLastIngestionRunInput, ArticleUncheckedUpdateWithoutLastIngestionRunInput>
    create: XOR<ArticleCreateWithoutLastIngestionRunInput, ArticleUncheckedCreateWithoutLastIngestionRunInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutLastIngestionRunInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutLastIngestionRunInput, ArticleUncheckedUpdateWithoutLastIngestionRunInput>
  }

  export type ArticleUpdateManyWithWhereWithoutLastIngestionRunInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutLastIngestionRunInput>
  }

  export type ClusterUpsertWithWhereUniqueWithoutLastIngestionRunInput = {
    where: ClusterWhereUniqueInput
    update: XOR<ClusterUpdateWithoutLastIngestionRunInput, ClusterUncheckedUpdateWithoutLastIngestionRunInput>
    create: XOR<ClusterCreateWithoutLastIngestionRunInput, ClusterUncheckedCreateWithoutLastIngestionRunInput>
  }

  export type ClusterUpdateWithWhereUniqueWithoutLastIngestionRunInput = {
    where: ClusterWhereUniqueInput
    data: XOR<ClusterUpdateWithoutLastIngestionRunInput, ClusterUncheckedUpdateWithoutLastIngestionRunInput>
  }

  export type ClusterUpdateManyWithWhereWithoutLastIngestionRunInput = {
    where: ClusterScalarWhereInput
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyWithoutLastIngestionRunInput>
  }

  export type SourceFetchUpsertWithWhereUniqueWithoutIngestionRunInput = {
    where: SourceFetchWhereUniqueInput
    update: XOR<SourceFetchUpdateWithoutIngestionRunInput, SourceFetchUncheckedUpdateWithoutIngestionRunInput>
    create: XOR<SourceFetchCreateWithoutIngestionRunInput, SourceFetchUncheckedCreateWithoutIngestionRunInput>
  }

  export type SourceFetchUpdateWithWhereUniqueWithoutIngestionRunInput = {
    where: SourceFetchWhereUniqueInput
    data: XOR<SourceFetchUpdateWithoutIngestionRunInput, SourceFetchUncheckedUpdateWithoutIngestionRunInput>
  }

  export type SourceFetchUpdateManyWithWhereWithoutIngestionRunInput = {
    where: SourceFetchScalarWhereInput
    data: XOR<SourceFetchUpdateManyMutationInput, SourceFetchUncheckedUpdateManyWithoutIngestionRunInput>
  }

  export type SourceFetchScalarWhereInput = {
    AND?: SourceFetchScalarWhereInput | SourceFetchScalarWhereInput[]
    OR?: SourceFetchScalarWhereInput[]
    NOT?: SourceFetchScalarWhereInput | SourceFetchScalarWhereInput[]
    id?: StringFilter<"SourceFetch"> | string
    ingestionRunId?: StringFilter<"SourceFetch"> | string
    sourceName?: StringFilter<"SourceFetch"> | string
    sourceUrl?: StringFilter<"SourceFetch"> | string
    mode?: StringFilter<"SourceFetch"> | string
    status?: StringFilter<"SourceFetch"> | string
    articleCount?: IntFilter<"SourceFetch"> | number
    latencyMs?: IntFilter<"SourceFetch"> | number
    errorMessage?: StringNullableFilter<"SourceFetch"> | string | null
    createdAt?: DateTimeFilter<"SourceFetch"> | Date | string
  }

  export type IngestionRunCreateWithoutSourceFetchesInput = {
    id?: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIngestionRunsInput
    articles?: ArticleCreateNestedManyWithoutLastIngestionRunInput
    clusters?: ClusterCreateNestedManyWithoutLastIngestionRunInput
  }

  export type IngestionRunUncheckedCreateWithoutSourceFetchesInput = {
    id?: string
    userId: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutLastIngestionRunInput
    clusters?: ClusterUncheckedCreateNestedManyWithoutLastIngestionRunInput
  }

  export type IngestionRunCreateOrConnectWithoutSourceFetchesInput = {
    where: IngestionRunWhereUniqueInput
    create: XOR<IngestionRunCreateWithoutSourceFetchesInput, IngestionRunUncheckedCreateWithoutSourceFetchesInput>
  }

  export type IngestionRunUpsertWithoutSourceFetchesInput = {
    update: XOR<IngestionRunUpdateWithoutSourceFetchesInput, IngestionRunUncheckedUpdateWithoutSourceFetchesInput>
    create: XOR<IngestionRunCreateWithoutSourceFetchesInput, IngestionRunUncheckedCreateWithoutSourceFetchesInput>
    where?: IngestionRunWhereInput
  }

  export type IngestionRunUpdateToOneWithWhereWithoutSourceFetchesInput = {
    where?: IngestionRunWhereInput
    data: XOR<IngestionRunUpdateWithoutSourceFetchesInput, IngestionRunUncheckedUpdateWithoutSourceFetchesInput>
  }

  export type IngestionRunUpdateWithoutSourceFetchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIngestionRunsNestedInput
    articles?: ArticleUpdateManyWithoutLastIngestionRunNestedInput
    clusters?: ClusterUpdateManyWithoutLastIngestionRunNestedInput
  }

  export type IngestionRunUncheckedUpdateWithoutSourceFetchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutLastIngestionRunNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutLastIngestionRunNestedInput
  }

  export type ClusterArticleCreateManyArticleInput = {
    clusterId: string
    position?: number
  }

  export type ClusterArticleUpdateWithoutArticleInput = {
    position?: IntFieldUpdateOperationsInput | number
    cluster?: ClusterUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ClusterArticleUncheckedUpdateWithoutArticleInput = {
    clusterId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ClusterArticleUncheckedUpdateManyWithoutArticleInput = {
    clusterId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ClusterArticleCreateManyClusterInput = {
    articleId: string
    position?: number
  }

  export type ClusterArticleUpdateWithoutClusterInput = {
    position?: IntFieldUpdateOperationsInput | number
    article?: ArticleUpdateOneRequiredWithoutClusterLinksNestedInput
  }

  export type ClusterArticleUncheckedUpdateWithoutClusterInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ClusterArticleUncheckedUpdateManyWithoutClusterInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCreateManyUserInput = {
    id?: string
    lastIngestionRunId?: string | null
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterCreateManyUserInput = {
    id?: string
    lastIngestionRunId?: string | null
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedSnapshotCreateManyUserInput = {
    id?: string
    snapshotAt?: Date | string
    clusterIds: string
  }

  export type IngestionRunCreateManyUserInput = {
    id?: string
    status?: string
    mode: string
    articleCount?: number
    dedupedCount?: number
    clusterCount?: number
    clusterState?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionCreateManyUserInput = {
    id?: string
    type: string
    articleId?: string | null
    clusterId?: string | null
    metadata: string
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastIngestionRun?: IngestionRunUpdateOneWithoutArticlesNestedInput
    clusterLinks?: ClusterArticleUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterLinks?: ClusterArticleUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastIngestionRun?: IngestionRunUpdateOneWithoutClustersNestedInput
    articles?: ClusterArticleUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ClusterArticleUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastIngestionRunId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedSnapshotUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterIds?: StringFieldUpdateOperationsInput | string
  }

  export type FeedSnapshotUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterIds?: StringFieldUpdateOperationsInput | string
  }

  export type FeedSnapshotUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterIds?: StringFieldUpdateOperationsInput | string
  }

  export type IngestionRunUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutLastIngestionRunNestedInput
    clusters?: ClusterUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUpdateManyWithoutIngestionRunNestedInput
  }

  export type IngestionRunUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutLastIngestionRunNestedInput
    clusters?: ClusterUncheckedUpdateManyWithoutLastIngestionRunNestedInput
    sourceFetches?: SourceFetchUncheckedUpdateManyWithoutIngestionRunNestedInput
  }

  export type IngestionRunUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    dedupedCount?: IntFieldUpdateOperationsInput | number
    clusterCount?: IntFieldUpdateOperationsInput | number
    clusterState?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyLastIngestionRunInput = {
    id?: string
    userId: string
    sourceName: string
    sourceUrl: string
    title: string
    url: string
    canonicalUrl?: string | null
    publishedAt?: Date | string | null
    fetchedAt?: Date | string
    author?: string | null
    summary?: string | null
    contentSnippet?: string | null
    imageUrl?: string | null
    topicCandidates: string
    hashTitle: string
    hashContent: string
    rankingScore?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterCreateManyLastIngestionRunInput = {
    id?: string
    userId: string
    key: string
    contentFingerprint?: string | null
    headline?: string | null
    summary?: string | null
    whyItMatters?: string | null
    whyRelevant?: string | null
    summarySource?: string
    summaryModel?: string | null
    tags: string
    representativeTitle?: string | null
    representativeUrl?: string | null
    score?: number
    sourceWeight?: number
    novelty?: number
    freshness?: number
    topicRelevance?: number
    changeStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceFetchCreateManyIngestionRunInput = {
    id?: string
    sourceName: string
    sourceUrl: string
    mode: string
    status: string
    articleCount?: number
    latencyMs: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ArticleUpdateWithoutLastIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    clusterLinks?: ClusterArticleUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutLastIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterLinks?: ClusterArticleUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutLastIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    topicCandidates?: StringFieldUpdateOperationsInput | string
    hashTitle?: StringFieldUpdateOperationsInput | string
    hashContent?: StringFieldUpdateOperationsInput | string
    rankingScore?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterUpdateWithoutLastIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClustersNestedInput
    articles?: ClusterArticleUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateWithoutLastIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ClusterArticleUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateManyWithoutLastIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    whyItMatters?: NullableStringFieldUpdateOperationsInput | string | null
    whyRelevant?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: StringFieldUpdateOperationsInput | string
    summaryModel?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    representativeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    representativeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    sourceWeight?: FloatFieldUpdateOperationsInput | number
    novelty?: FloatFieldUpdateOperationsInput | number
    freshness?: FloatFieldUpdateOperationsInput | number
    topicRelevance?: FloatFieldUpdateOperationsInput | number
    changeStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceFetchUpdateWithoutIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceFetchUncheckedUpdateWithoutIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceFetchUncheckedUpdateManyWithoutIngestionRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    articleCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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