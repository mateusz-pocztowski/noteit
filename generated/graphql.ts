import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  NOT?: Maybe<Array<AccountWhereInput>>;
  id?: Maybe<IntFilter>;
  compoundId?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
  providerType?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  color: Scalars['String'];
  label: Scalars['String'];
  primary: Scalars['Boolean'];
  notes: Array<Note>;
  user: User;
  userId: Scalars['Int'];
};


export type CategoryNotesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<NoteWhereUniqueInput>;
  after?: Maybe<NoteWhereUniqueInput>;
};

export type CategoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  label: Scalars['String'];
  primary: Scalars['Boolean'];
  notes?: Maybe<NoteCreateNestedManyWithoutCategoryInput>;
  user: UserCreateNestedOneWithoutCategoriesInput;
};

export type CategoryCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  label: Scalars['String'];
  primary: Scalars['Boolean'];
};

export type CategoryCreateManyUserInputEnvelope = {
  data?: Maybe<Array<CategoryCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CategoryCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<CategoryCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<CategoryCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateNestedOneWithoutNotesInput = {
  create?: Maybe<CategoryCreateWithoutNotesInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutNotesInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
};

export type CategoryCreateOrConnectWithoutNotesInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutNotesInput;
};

export type CategoryCreateOrConnectWithoutUserInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutUserInput;
};

export type CategoryCreateWithoutNotesInput = {
  id?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  label: Scalars['String'];
  primary: Scalars['Boolean'];
  user: UserCreateNestedOneWithoutCategoriesInput;
};

export type CategoryCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  label: Scalars['String'];
  primary: Scalars['Boolean'];
  notes?: Maybe<NoteCreateNestedManyWithoutCategoryInput>;
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  color?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  primary?: Maybe<BoolFilter>;
  userId?: Maybe<IntFilter>;
};

export type CategoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  color?: Maybe<StringFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<BoolFieldUpdateOperationsInput>;
  notes?: Maybe<NoteUpdateManyWithoutCategoryInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCategoriesInput>;
};

export type CategoryUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  color?: Maybe<StringFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutUserInput = {
  where: CategoryScalarWhereInput;
  data: CategoryUpdateManyMutationInput;
};

export type CategoryUpdateManyWithoutUserInput = {
  create?: Maybe<Array<CategoryCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<CategoryCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
};

export type CategoryUpdateOneRequiredWithoutNotesInput = {
  create?: Maybe<CategoryCreateWithoutNotesInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutNotesInput>;
  upsert?: Maybe<CategoryUpsertWithoutNotesInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  update?: Maybe<CategoryUpdateWithoutNotesInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutUserInput;
};

export type CategoryUpdateWithoutNotesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  color?: Maybe<StringFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<BoolFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCategoriesInput>;
};

export type CategoryUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  color?: Maybe<StringFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<BoolFieldUpdateOperationsInput>;
  notes?: Maybe<NoteUpdateManyWithoutCategoryInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutUserInput;
  create: CategoryCreateWithoutUserInput;
};

export type CategoryUpsertWithoutNotesInput = {
  update: CategoryUpdateWithoutNotesInput;
  create: CategoryCreateWithoutNotesInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<StringFilter>;
  color?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  primary?: Maybe<BoolFilter>;
  notes?: Maybe<NoteListRelationFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
  updateOneUser?: Maybe<User>;
  deleteOneUser?: Maybe<User>;
  createOneNote: Note;
  updateOneNote?: Maybe<Note>;
  deleteOneNote?: Maybe<Note>;
  createOneCategory: Category;
  updateOneCategory?: Maybe<Category>;
  deleteOneCategory?: Maybe<Category>;
  updateManyNote: AffectedRowsOutput;
  deleteManyNote: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyAccount: AffectedRowsOutput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationCreateOneNoteArgs = {
  data: NoteCreateInput;
};


export type MutationUpdateOneNoteArgs = {
  data: NoteUpdateInput;
  where: NoteWhereUniqueInput;
};


export type MutationDeleteOneNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateManyNoteArgs = {
  data: NoteUpdateManyMutationInput;
  where?: Maybe<NoteWhereInput>;
};


export type MutationDeleteManyNoteArgs = {
  where?: Maybe<NoteWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: Maybe<SessionWhereInput>;
};


export type MutationDeleteManyAccountArgs = {
  where?: Maybe<AccountWhereInput>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['String'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  category: Category;
  userId: Scalars['Int'];
  categoryId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type NoteCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  category: CategoryCreateNestedOneWithoutNotesInput;
  user: UserCreateNestedOneWithoutNotesInput;
};

export type NoteCreateManyCategoryInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type NoteCreateManyCategoryInputEnvelope = {
  data?: Maybe<Array<NoteCreateManyCategoryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type NoteCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  categoryId: Scalars['String'];
};

export type NoteCreateManyUserInputEnvelope = {
  data?: Maybe<Array<NoteCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type NoteCreateNestedManyWithoutCategoryInput = {
  create?: Maybe<Array<NoteCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<NoteCreateOrConnectWithoutCategoryInput>>;
  createMany?: Maybe<NoteCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
};

export type NoteCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<NoteCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<NoteCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<NoteCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
};

export type NoteCreateOrConnectWithoutCategoryInput = {
  where: NoteWhereUniqueInput;
  create: NoteCreateWithoutCategoryInput;
};

export type NoteCreateOrConnectWithoutUserInput = {
  where: NoteWhereUniqueInput;
  create: NoteCreateWithoutUserInput;
};

export type NoteCreateWithoutCategoryInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutNotesInput;
};

export type NoteCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  category: CategoryCreateNestedOneWithoutNotesInput;
};

export type NoteListRelationFilter = {
  every?: Maybe<NoteWhereInput>;
  some?: Maybe<NoteWhereInput>;
  none?: Maybe<NoteWhereInput>;
};

export type NoteScalarWhereInput = {
  AND?: Maybe<Array<NoteScalarWhereInput>>;
  OR?: Maybe<Array<NoteScalarWhereInput>>;
  NOT?: Maybe<Array<NoteScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntFilter>;
  categoryId?: Maybe<StringFilter>;
};

export type NoteUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutNotesInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutNotesInput>;
};

export type NoteUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type NoteUpdateManyWithWhereWithoutCategoryInput = {
  where: NoteScalarWhereInput;
  data: NoteUpdateManyMutationInput;
};

export type NoteUpdateManyWithWhereWithoutUserInput = {
  where: NoteScalarWhereInput;
  data: NoteUpdateManyMutationInput;
};

export type NoteUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<NoteCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<NoteCreateOrConnectWithoutCategoryInput>>;
  upsert?: Maybe<Array<NoteUpsertWithWhereUniqueWithoutCategoryInput>>;
  createMany?: Maybe<NoteCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
  set?: Maybe<Array<NoteWhereUniqueInput>>;
  disconnect?: Maybe<Array<NoteWhereUniqueInput>>;
  delete?: Maybe<Array<NoteWhereUniqueInput>>;
  update?: Maybe<Array<NoteUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<NoteUpdateManyWithWhereWithoutCategoryInput>>;
  deleteMany?: Maybe<Array<NoteScalarWhereInput>>;
};

export type NoteUpdateManyWithoutUserInput = {
  create?: Maybe<Array<NoteCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<NoteCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<NoteUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<NoteCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
  set?: Maybe<Array<NoteWhereUniqueInput>>;
  disconnect?: Maybe<Array<NoteWhereUniqueInput>>;
  delete?: Maybe<Array<NoteWhereUniqueInput>>;
  update?: Maybe<Array<NoteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<NoteUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<NoteScalarWhereInput>>;
};

export type NoteUpdateWithWhereUniqueWithoutCategoryInput = {
  where: NoteWhereUniqueInput;
  data: NoteUpdateWithoutCategoryInput;
};

export type NoteUpdateWithWhereUniqueWithoutUserInput = {
  where: NoteWhereUniqueInput;
  data: NoteUpdateWithoutUserInput;
};

export type NoteUpdateWithoutCategoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutNotesInput>;
};

export type NoteUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutNotesInput>;
};

export type NoteUpsertWithWhereUniqueWithoutCategoryInput = {
  where: NoteWhereUniqueInput;
  update: NoteUpdateWithoutCategoryInput;
  create: NoteCreateWithoutCategoryInput;
};

export type NoteUpsertWithWhereUniqueWithoutUserInput = {
  where: NoteWhereUniqueInput;
  update: NoteUpdateWithoutUserInput;
  create: NoteCreateWithoutUserInput;
};

export type NoteWhereInput = {
  AND?: Maybe<Array<NoteWhereInput>>;
  OR?: Maybe<Array<NoteWhereInput>>;
  NOT?: Maybe<Array<NoteWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  category?: Maybe<CategoryWhereInput>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
  categoryId?: Maybe<StringFilter>;
};

export type NoteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  notes: Array<Note>;
  categories: Array<Category>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryNotesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<NoteWhereUniqueInput>;
  after?: Maybe<NoteWhereUniqueInput>;
};


export type QueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CategoryWhereUniqueInput>;
  after?: Maybe<CategoryWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  expires?: Maybe<DateTimeFilter>;
  sessionToken?: Maybe<StringFilter>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  categories: Array<Category>;
};


export type UserCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CategoryWhereUniqueInput>;
  after?: Maybe<CategoryWhereUniqueInput>;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  categories?: Maybe<CategoryCreateNestedManyWithoutUserInput>;
  notes?: Maybe<NoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateNestedOneWithoutCategoriesInput = {
  create?: Maybe<UserCreateWithoutCategoriesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCategoriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutNotesInput = {
  create?: Maybe<UserCreateWithoutNotesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutNotesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutCategoriesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCategoriesInput;
};

export type UserCreateOrConnectWithoutNotesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutNotesInput;
};

export type UserCreateWithoutCategoriesInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutNotesInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  categories?: Maybe<CategoryCreateNestedManyWithoutUserInput>;
};

export type UserUpdateInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutUserInput>;
  notes?: Maybe<NoteUpdateManyWithoutUserInput>;
};

export type UserUpdateOneRequiredWithoutCategoriesInput = {
  create?: Maybe<UserCreateWithoutCategoriesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCategoriesInput>;
  upsert?: Maybe<UserUpsertWithoutCategoriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCategoriesInput>;
};

export type UserUpdateOneRequiredWithoutNotesInput = {
  create?: Maybe<UserCreateWithoutNotesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutNotesInput>;
  upsert?: Maybe<UserUpsertWithoutNotesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutNotesInput>;
};

export type UserUpdateWithoutCategoriesInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutNotesInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutUserInput>;
};

export type UserUpsertWithoutCategoriesInput = {
  update: UserUpdateWithoutCategoriesInput;
  create: UserCreateWithoutCategoriesInput;
};

export type UserUpsertWithoutNotesInput = {
  update: UserUpdateWithoutNotesInput;
  create: UserCreateWithoutNotesInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
  notes?: Maybe<NoteListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type CreateCategoryMutationVariables = Exact<{
  userId: Scalars['Int'];
  label: Scalars['String'];
  primary?: Maybe<Scalars['Boolean']>;
  color: Scalars['String'];
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', category: { __typename?: 'Category', id: string, label: string, primary: boolean, color: string } };

export type CreateNoteMutationVariables = Exact<{
  userId: Scalars['Int'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createOneNote: { __typename?: 'Note', id: string, title: string, content?: Maybe<string>, updatedAt: any, category: { __typename?: 'Category', color: string, label: string, primary: boolean } } };

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['String'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteOneCategory?: Maybe<{ __typename?: 'Category', id: string }> };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteManyNote: { __typename?: 'AffectedRowsOutput', count: number }, deleteManyCategory: { __typename?: 'AffectedRowsOutput', count: number }, deleteManySession: { __typename?: 'AffectedRowsOutput', count: number }, deleteManyAccount: { __typename?: 'AffectedRowsOutput', count: number }, deleteOneUser?: Maybe<{ __typename?: 'User', id: number, email?: Maybe<string> }> };

export type UpdateNoteMutationVariables = Exact<{
  noteId: Scalars['String'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateOneNote?: Maybe<{ __typename?: 'Note', title: string, content?: Maybe<string>, updatedAt: any, noteID: string, category: { __typename?: 'Category', id: string, label: string, color: string, primary: boolean } }> };

export type GetUserDataQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetUserDataQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', categories: Array<{ __typename?: 'Category', id: string, label: string, color: string, primary: boolean, notes: Array<{ __typename?: 'Note', id: string, title: string, updatedAt: any }> }> }> };


export const CreateCategoryDocument = `
    mutation createCategory($userId: Int!, $label: String!, $primary: Boolean = false, $color: String!) {
  category: createOneCategory(
    data: {user: {connect: {id: $userId}}, label: $label, primary: $primary, color: $color}
  ) {
    id
    label
    primary
    color
  }
}
    `;
export const useCreateCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateCategoryMutation, TError, CreateCategoryMutationVariables, TContext>
    ) => 
    useMutation<CreateCategoryMutation, TError, CreateCategoryMutationVariables, TContext>(
      (variables?: CreateCategoryMutationVariables) => fetcher<CreateCategoryMutation, CreateCategoryMutationVariables>(client, CreateCategoryDocument, variables)(),
      options
    );
export const CreateNoteDocument = `
    mutation createNote($userId: Int!, $categoryId: String!, $title: String!, $content: String = "") {
  createOneNote(
    data: {user: {connect: {id: $userId}}, category: {connect: {id: $categoryId}}, title: $title, content: $content}
  ) {
    id
    title
    content
    updatedAt
    category {
      color
      label
      primary
    }
  }
}
    `;
export const useCreateNoteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateNoteMutation, TError, CreateNoteMutationVariables, TContext>
    ) => 
    useMutation<CreateNoteMutation, TError, CreateNoteMutationVariables, TContext>(
      (variables?: CreateNoteMutationVariables) => fetcher<CreateNoteMutation, CreateNoteMutationVariables>(client, CreateNoteDocument, variables)(),
      options
    );
export const DeleteCategoryDocument = `
    mutation deleteCategory($categoryId: String!) {
  deleteOneCategory(where: {id: $categoryId}) {
    id
  }
}
    `;
export const useDeleteCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteCategoryMutation, TError, DeleteCategoryMutationVariables, TContext>
    ) => 
    useMutation<DeleteCategoryMutation, TError, DeleteCategoryMutationVariables, TContext>(
      (variables?: DeleteCategoryMutationVariables) => fetcher<DeleteCategoryMutation, DeleteCategoryMutationVariables>(client, DeleteCategoryDocument, variables)(),
      options
    );
export const DeleteUserDocument = `
    mutation deleteUser($userId: Int!) {
  deleteManyNote(where: {userId: {equals: $userId}}) {
    count
  }
  deleteManyCategory(where: {user: {id: {equals: $userId}}}) {
    count
  }
  deleteManyCategory(where: {user: {id: {equals: $userId}}}) {
    count
  }
  deleteManyCategory(where: {user: {id: {equals: $userId}}}) {
    count
  }
  deleteManySession(where: {userId: {equals: $userId}}) {
    count
  }
  deleteManyAccount(where: {userId: {equals: $userId}}) {
    count
  }
  deleteOneUser(where: {id: $userId}) {
    id
    email
  }
}
    `;
export const useDeleteUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>
    ) => 
    useMutation<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>(
      (variables?: DeleteUserMutationVariables) => fetcher<DeleteUserMutation, DeleteUserMutationVariables>(client, DeleteUserDocument, variables)(),
      options
    );
export const UpdateNoteDocument = `
    mutation updateNote($noteId: String!, $categoryId: String!, $title: String!, $content: String) {
  updateOneNote(
    data: {category: {connect: {id: $categoryId}}, title: {set: $title}, content: {set: $content}}
    where: {id: $noteId}
  ) {
    noteID: id
    title
    content
    updatedAt
    category {
      id
      label
      color
      primary
    }
  }
}
    `;
export const useUpdateNoteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateNoteMutation, TError, UpdateNoteMutationVariables, TContext>
    ) => 
    useMutation<UpdateNoteMutation, TError, UpdateNoteMutationVariables, TContext>(
      (variables?: UpdateNoteMutationVariables) => fetcher<UpdateNoteMutation, UpdateNoteMutationVariables>(client, UpdateNoteDocument, variables)(),
      options
    );
export const GetUserDataDocument = `
    query GetUserData($userId: Int!) {
  user(where: {id: $userId}) {
    categories {
      id
      label
      color
      primary
      notes {
        id
        title
        updatedAt
      }
    }
  }
}
    `;
export const useGetUserDataQuery = <
      TData = GetUserDataQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: GetUserDataQueryVariables, 
      options?: UseQueryOptions<GetUserDataQuery, TError, TData>
    ) => 
    useQuery<GetUserDataQuery, TError, TData>(
      ['GetUserData', variables],
      fetcher<GetUserDataQuery, GetUserDataQueryVariables>(client, GetUserDataDocument, variables),
      options
    );