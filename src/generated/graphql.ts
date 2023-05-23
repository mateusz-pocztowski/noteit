import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  accessToken?: InputMaybe<StringNullableFilter>;
  accessTokenExpires?: InputMaybe<DateTimeNullableFilter>;
  compoundId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringFilter>;
  providerType?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  label: Scalars['String'];
  notes: Array<Note>;
  primary: Scalars['Boolean'];
  userId: Scalars['Int'];
};


export type CategoryNotesArgs = {
  after?: InputMaybe<NoteWhereUniqueInput>;
  before?: InputMaybe<NoteWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  notes?: InputMaybe<NoteCreateNestedManyWithoutCategoryInput>;
  primary: Scalars['Boolean'];
  user: UserCreateNestedOneWithoutCategoriesInput;
};

export type CategoryCreateManyUserInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  primary: Scalars['Boolean'];
};

export type CategoryCreateManyUserInputEnvelope = {
  data?: InputMaybe<Array<CategoryCreateManyUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<CategoryCreateManyUserInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutNotesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<CategoryCreateWithoutNotesInput>;
};

export type CategoryCreateOrConnectWithoutNotesInput = {
  create: CategoryCreateWithoutNotesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutUserInput = {
  create: CategoryCreateWithoutUserInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutNotesInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  primary: Scalars['Boolean'];
  user: UserCreateNestedOneWithoutCategoriesInput;
};

export type CategoryCreateWithoutUserInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  notes?: InputMaybe<NoteCreateNestedManyWithoutCategoryInput>;
  primary: Scalars['Boolean'];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  primary?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type CategoryUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  notes?: InputMaybe<NoteUpdateManyWithoutCategoryInput>;
  primary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCategoriesInput>;
};

export type CategoryUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  primary?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutUserInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<CategoryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CategoryUpdateOneRequiredWithoutNotesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<CategoryCreateWithoutNotesInput>;
  update?: InputMaybe<CategoryUpdateWithoutNotesInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutNotesInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
  data: CategoryUpdateWithoutUserInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutNotesInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  primary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCategoriesInput>;
};

export type CategoryUpdateWithoutUserInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  notes?: InputMaybe<NoteUpdateManyWithoutCategoryInput>;
  primary?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
  create: CategoryCreateWithoutUserInput;
  update: CategoryUpdateWithoutUserInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutNotesInput = {
  create: CategoryCreateWithoutNotesInput;
  update: CategoryUpdateWithoutNotesInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  notes?: InputMaybe<NoteListRelationFilter>;
  primary?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCategory: Category;
  createOneNote: Note;
  createOneUser: User;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyNote: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteOneCategory?: Maybe<Mutation>;
  deleteOneNote?: Maybe<Note>;
  deleteOneUser?: Maybe<User>;
  updateManyNote: AffectedRowsOutput;
  updateOneCategory?: Maybe<Category>;
  updateOneNote?: Maybe<Note>;
  updateOneUser?: Maybe<User>;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneNoteArgs = {
  data: NoteCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyNoteArgs = {
  where?: InputMaybe<NoteWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteOneCategoryArgs = {
  id: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationDeleteOneNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyNoteArgs = {
  data: NoteUpdateManyMutationInput;
  where?: InputMaybe<NoteWhereInput>;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneNoteArgs = {
  data: NoteUpdateInput;
  where: NoteWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Note = {
  __typename?: 'Note';
  category: Category;
  categoryId: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NoteCreateInput = {
  category: CategoryCreateNestedOneWithoutNotesInput;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutNotesInput;
};

export type NoteCreateManyCategoryInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type NoteCreateManyCategoryInputEnvelope = {
  data?: InputMaybe<Array<NoteCreateManyCategoryInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NoteCreateManyUserInput = {
  categoryId: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NoteCreateManyUserInputEnvelope = {
  data?: InputMaybe<Array<NoteCreateManyUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NoteCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NoteCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<NoteCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<NoteCreateManyCategoryInputEnvelope>;
};

export type NoteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NoteCreateWithoutUserInput>>;
  createMany?: InputMaybe<NoteCreateManyUserInputEnvelope>;
};

export type NoteCreateOrConnectWithoutCategoryInput = {
  create: NoteCreateWithoutCategoryInput;
  where: NoteWhereUniqueInput;
};

export type NoteCreateOrConnectWithoutUserInput = {
  create: NoteCreateWithoutUserInput;
  where: NoteWhereUniqueInput;
};

export type NoteCreateWithoutCategoryInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutNotesInput;
};

export type NoteCreateWithoutUserInput = {
  category: CategoryCreateNestedOneWithoutNotesInput;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NoteListRelationFilter = {
  every?: InputMaybe<NoteWhereInput>;
  none?: InputMaybe<NoteWhereInput>;
  some?: InputMaybe<NoteWhereInput>;
};

export type NoteScalarWhereInput = {
  AND?: InputMaybe<Array<NoteScalarWhereInput>>;
  NOT?: InputMaybe<Array<NoteScalarWhereInput>>;
  OR?: InputMaybe<Array<NoteScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type NoteUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutNotesInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotesInput>;
};

export type NoteUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NoteUpdateManyWithWhereWithoutCategoryInput = {
  data: NoteUpdateManyMutationInput;
  where: NoteScalarWhereInput;
};

export type NoteUpdateManyWithWhereWithoutUserInput = {
  data: NoteUpdateManyMutationInput;
  where: NoteScalarWhereInput;
};

export type NoteUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NoteCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<NoteCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<NoteCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<NoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  set?: InputMaybe<Array<NoteWhereUniqueInput>>;
  update?: InputMaybe<Array<NoteUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<NoteUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<NoteUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type NoteUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NoteCreateWithoutUserInput>>;
  createMany?: InputMaybe<NoteCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  set?: InputMaybe<Array<NoteWhereUniqueInput>>;
  update?: InputMaybe<Array<NoteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NoteUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NoteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NoteUpdateWithWhereUniqueWithoutCategoryInput = {
  data: NoteUpdateWithoutCategoryInput;
  where: NoteWhereUniqueInput;
};

export type NoteUpdateWithWhereUniqueWithoutUserInput = {
  data: NoteUpdateWithoutUserInput;
  where: NoteWhereUniqueInput;
};

export type NoteUpdateWithoutCategoryInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotesInput>;
};

export type NoteUpdateWithoutUserInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutNotesInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NoteUpsertWithWhereUniqueWithoutCategoryInput = {
  create: NoteCreateWithoutCategoryInput;
  update: NoteUpdateWithoutCategoryInput;
  where: NoteWhereUniqueInput;
};

export type NoteUpsertWithWhereUniqueWithoutUserInput = {
  create: NoteCreateWithoutUserInput;
  update: NoteUpdateWithoutUserInput;
  where: NoteWhereUniqueInput;
};

export type NoteWhereInput = {
  AND?: InputMaybe<Array<NoteWhereInput>>;
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  OR?: InputMaybe<Array<NoteWhereInput>>;
  category?: InputMaybe<CategoryWhereInput>;
  categoryId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
};

export type NoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  note?: Maybe<Note>;
  notes: Array<Note>;
  user?: Maybe<User>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<CategoryWhereUniqueInput>;
  before?: InputMaybe<CategoryWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryNoteArgs = {
  id: Scalars['String'];
  userId: Scalars['Int'];
};


export type QueryNotesArgs = {
  after?: InputMaybe<NoteWhereUniqueInput>;
  before?: InputMaybe<NoteWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  categories: Array<Category>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes: Array<Note>;
  updatedAt: Scalars['DateTime'];
};


export type UserCategoriesArgs = {
  after?: InputMaybe<CategoryWhereUniqueInput>;
  before?: InputMaybe<CategoryWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserNotesArgs = {
  after?: InputMaybe<NoteWhereUniqueInput>;
  before?: InputMaybe<NoteWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserCreateInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<NoteCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<UserCreateWithoutCategoriesInput>;
};

export type UserCreateNestedOneWithoutNotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<UserCreateWithoutNotesInput>;
};

export type UserCreateOrConnectWithoutCategoriesInput = {
  create: UserCreateWithoutCategoriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotesInput = {
  create: UserCreateWithoutNotesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCategoriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<NoteCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutNotesInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpdateInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notes?: InputMaybe<NoteUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCategoriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<UserCreateWithoutCategoriesInput>;
  update?: InputMaybe<UserUpdateWithoutCategoriesInput>;
  upsert?: InputMaybe<UserUpsertWithoutCategoriesInput>;
};

export type UserUpdateOneRequiredWithoutNotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<UserCreateWithoutNotesInput>;
  update?: InputMaybe<UserUpdateWithoutNotesInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotesInput>;
};

export type UserUpdateWithoutCategoriesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notes?: InputMaybe<NoteUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotesInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCategoriesInput = {
  create: UserCreateWithoutCategoriesInput;
  update: UserUpdateWithoutCategoriesInput;
};

export type UserUpsertWithoutNotesInput = {
  create: UserCreateWithoutNotesInput;
  update: UserUpdateWithoutNotesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  notes?: InputMaybe<NoteListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CreateCategoryMutationVariables = Exact<{
  userId: Scalars['Int'];
  label: Scalars['String'];
  primary?: InputMaybe<Scalars['Boolean']>;
  color: Scalars['String'];
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', category: { __typename?: 'Category', id: string, label: string, primary: boolean, color: string } };

export type CreateNoteMutationVariables = Exact<{
  userId: Scalars['Int'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createOneNote: { __typename?: 'Note', id: string, title: string, content?: string | null, updatedAt: any, category: { __typename?: 'Category', color: string, label: string, primary: boolean } } };

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteOneCategory?: { __typename: 'Mutation' } | null };

export type DeleteNoteMutationVariables = Exact<{
  noteId: Scalars['String'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', deleteOneNote?: { __typename?: 'Note', id: string } | null };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteManyNote: { __typename?: 'AffectedRowsOutput', count: number }, deleteManyCategory: { __typename?: 'AffectedRowsOutput', count: number }, deleteManySession: { __typename?: 'AffectedRowsOutput', count: number }, deleteManyAccount: { __typename?: 'AffectedRowsOutput', count: number }, deleteOneUser?: { __typename?: 'User', id: number, email?: string | null } | null };

export type UpdateCategoryMutationVariables = Exact<{
  categoryId: Scalars['String'];
  label: Scalars['String'];
  color: Scalars['String'];
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateOneCategory?: { __typename?: 'Category', id: string, color: string, label: string, primary: boolean } | null };

export type UpdateNoteWithContentMutationVariables = Exact<{
  noteId: Scalars['String'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdateNoteWithContentMutation = { __typename?: 'Mutation', updateOneNote?: { __typename?: 'Note', id: string, title: string, content?: string | null, updatedAt: any, category: { __typename?: 'Category', id: string, label: string, color: string, primary: boolean } } | null };

export type UpdateNoteWithoutContentMutationVariables = Exact<{
  noteId: Scalars['String'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
}>;


export type UpdateNoteWithoutContentMutation = { __typename?: 'Mutation', updateOneNote?: { __typename?: 'Note', id: string, title: string, content?: string | null, updatedAt: any, category: { __typename?: 'Category', id: string, label: string, color: string, primary: boolean } } | null };

export type UpdateUserMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateOneUser?: { __typename?: 'User', id: number } | null };

export type GetNotesQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetNotesQuery = { __typename?: 'Query', user?: { __typename?: 'User', categories: Array<{ __typename?: 'Category', id: string, label: string, color: string, primary: boolean, createdAt: any, notes: Array<{ __typename?: 'Note', id: string, title: string, createdAt: any, updatedAt: any, category: { __typename?: 'Category', id: string, label: string, primary: boolean, color: string } }> }> } | null };

export type GetNotesCategoriesQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetNotesCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, color: string, label: string, primary: boolean }> };

export type GetSingleNoteQueryVariables = Exact<{
  noteId: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type GetSingleNoteQuery = { __typename?: 'Query', note?: { __typename?: 'Note', id: string, title: string, content?: string | null, category: { __typename?: 'Category', id: string, color: string, label: string, primary: boolean } } | null };

export type GetUserDataQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetUserDataQuery = { __typename?: 'Query', user?: { __typename?: 'User', name?: string | null, email?: string | null, image?: string | null } | null };


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
    mutation deleteCategory($categoryId: String!, $userId: Int!) {
  deleteOneCategory(id: $categoryId, userId: $userId) {
    __typename
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
export const DeleteNoteDocument = `
    mutation deleteNote($noteId: String!) {
  deleteOneNote(where: {id: $noteId}) {
    id
  }
}
    `;
export const useDeleteNoteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteNoteMutation, TError, DeleteNoteMutationVariables, TContext>
    ) => 
    useMutation<DeleteNoteMutation, TError, DeleteNoteMutationVariables, TContext>(
      (variables?: DeleteNoteMutationVariables) => fetcher<DeleteNoteMutation, DeleteNoteMutationVariables>(client, DeleteNoteDocument, variables)(),
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
export const UpdateCategoryDocument = `
    mutation updateCategory($categoryId: String!, $label: String!, $color: String!) {
  updateOneCategory(
    data: {color: {set: $color}, label: {set: $label}}
    where: {id: $categoryId}
  ) {
    id
    color
    label
    primary
  }
}
    `;
export const useUpdateCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateCategoryMutation, TError, UpdateCategoryMutationVariables, TContext>
    ) => 
    useMutation<UpdateCategoryMutation, TError, UpdateCategoryMutationVariables, TContext>(
      (variables?: UpdateCategoryMutationVariables) => fetcher<UpdateCategoryMutation, UpdateCategoryMutationVariables>(client, UpdateCategoryDocument, variables)(),
      options
    );
export const UpdateNoteWithContentDocument = `
    mutation updateNoteWithContent($noteId: String!, $categoryId: String!, $title: String!, $content: String!) {
  updateOneNote(
    data: {category: {connect: {id: $categoryId}}, title: {set: $title}, content: {set: $content}}
    where: {id: $noteId}
  ) {
    id
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
export const useUpdateNoteWithContentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateNoteWithContentMutation, TError, UpdateNoteWithContentMutationVariables, TContext>
    ) => 
    useMutation<UpdateNoteWithContentMutation, TError, UpdateNoteWithContentMutationVariables, TContext>(
      (variables?: UpdateNoteWithContentMutationVariables) => fetcher<UpdateNoteWithContentMutation, UpdateNoteWithContentMutationVariables>(client, UpdateNoteWithContentDocument, variables)(),
      options
    );
export const UpdateNoteWithoutContentDocument = `
    mutation updateNoteWithoutContent($noteId: String!, $categoryId: String!, $title: String!) {
  updateOneNote(
    data: {category: {connect: {id: $categoryId}}, title: {set: $title}}
    where: {id: $noteId}
  ) {
    id
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
export const useUpdateNoteWithoutContentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateNoteWithoutContentMutation, TError, UpdateNoteWithoutContentMutationVariables, TContext>
    ) => 
    useMutation<UpdateNoteWithoutContentMutation, TError, UpdateNoteWithoutContentMutationVariables, TContext>(
      (variables?: UpdateNoteWithoutContentMutationVariables) => fetcher<UpdateNoteWithoutContentMutation, UpdateNoteWithoutContentMutationVariables>(client, UpdateNoteWithoutContentDocument, variables)(),
      options
    );
export const UpdateUserDocument = `
    mutation updateUser($name: String, $image: String, $userId: Int!) {
  updateOneUser(
    data: {name: {set: $name}, image: {set: $image}}
    where: {id: $userId}
  ) {
    id
  }
}
    `;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>
    ) => 
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      (variables?: UpdateUserMutationVariables) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(client, UpdateUserDocument, variables)(),
      options
    );
export const GetNotesDocument = `
    query GetNotes($userId: Int!) {
  user(where: {id: $userId}) {
    categories {
      id
      label
      color
      primary
      createdAt
      notes {
        id
        title
        createdAt
        updatedAt
        category {
          id
          label
          primary
          color
        }
      }
    }
  }
}
    `;
export const useGetNotesQuery = <
      TData = GetNotesQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: GetNotesQueryVariables, 
      options?: UseQueryOptions<GetNotesQuery, TError, TData>
    ) => 
    useQuery<GetNotesQuery, TError, TData>(
      ['GetNotes', variables],
      fetcher<GetNotesQuery, GetNotesQueryVariables>(client, GetNotesDocument, variables),
      options
    );
export const GetNotesCategoriesDocument = `
    query GetNotesCategories($userId: Int!) {
  categories(where: {userId: {equals: $userId}}) {
    id
    color
    label
    primary
  }
}
    `;
export const useGetNotesCategoriesQuery = <
      TData = GetNotesCategoriesQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: GetNotesCategoriesQueryVariables, 
      options?: UseQueryOptions<GetNotesCategoriesQuery, TError, TData>
    ) => 
    useQuery<GetNotesCategoriesQuery, TError, TData>(
      ['GetNotesCategories', variables],
      fetcher<GetNotesCategoriesQuery, GetNotesCategoriesQueryVariables>(client, GetNotesCategoriesDocument, variables),
      options
    );
export const GetSingleNoteDocument = `
    query GetSingleNote($noteId: String!, $userId: Int!) {
  note(id: $noteId, userId: $userId) {
    id
    title
    content
    category {
      id
      color
      label
      primary
    }
  }
}
    `;
export const useGetSingleNoteQuery = <
      TData = GetSingleNoteQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: GetSingleNoteQueryVariables, 
      options?: UseQueryOptions<GetSingleNoteQuery, TError, TData>
    ) => 
    useQuery<GetSingleNoteQuery, TError, TData>(
      ['GetSingleNote', variables],
      fetcher<GetSingleNoteQuery, GetSingleNoteQueryVariables>(client, GetSingleNoteDocument, variables),
      options
    );
export const GetUserDataDocument = `
    query GetUserData($userId: Int!) {
  user(where: {id: $userId}) {
    name
    email
    image
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