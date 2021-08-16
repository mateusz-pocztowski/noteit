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
  DateTime: any;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
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
  userId: Scalars['String'];
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
  notes?: Maybe<NoteCreateManyWithoutCategoryInput>;
  user: UserCreateOneWithoutCategoriesInput;
};

export type CategoryCreateManyWithoutUserInput = {
  create?: Maybe<Array<CategoryCreateWithoutUserInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutuserInput>>;
};

export type CategoryCreateOneWithoutNotesInput = {
  create?: Maybe<CategoryCreateWithoutNotesInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutnotesInput>;
};

export type CategoryCreateOrConnectWithoutnotesInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutNotesInput;
};

export type CategoryCreateOrConnectWithoutuserInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutUserInput;
};

export type CategoryCreateWithoutNotesInput = {
  id?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  label: Scalars['String'];
  primary: Scalars['Boolean'];
  user: UserCreateOneWithoutCategoriesInput;
};

export type CategoryCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  label: Scalars['String'];
  primary: Scalars['Boolean'];
  notes?: Maybe<NoteCreateManyWithoutCategoryInput>;
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
  userId?: Maybe<StringFilter>;
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
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutuserInput>>;
};

export type CategoryUpdateOneRequiredWithoutNotesInput = {
  create?: Maybe<CategoryCreateWithoutNotesInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  update?: Maybe<CategoryUpdateWithoutNotesInput>;
  upsert?: Maybe<CategoryUpsertWithoutNotesInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutnotesInput>;
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
  userId?: Maybe<StringFilter>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
  updateOneUser?: Maybe<User>;
  deleteOneUser?: Maybe<User>;
  createOneNote: Note;
  updateOneNote?: Maybe<Note>;
  deleteOneNote?: Maybe<Note>;
  deleteManyNote: BatchPayload;
  updateManyNote: BatchPayload;
  createOneCategory: Category;
  updateOneCategory?: Maybe<Category>;
  deleteOneCategory?: Maybe<Category>;
  deleteManyCategory: BatchPayload;
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


export type MutationDeleteManyNoteArgs = {
  where?: Maybe<NoteWhereInput>;
};


export type MutationUpdateManyNoteArgs = {
  data: NoteUpdateManyMutationInput;
  where?: Maybe<NoteWhereInput>;
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


export type MutationDeleteManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
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
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  category: Category;
  userId: Scalars['String'];
  categoryId: Scalars['String'];
};

export type NoteCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  category: CategoryCreateOneWithoutNotesInput;
};

export type NoteCreateManyWithoutCategoryInput = {
  create?: Maybe<Array<NoteCreateWithoutCategoryInput>>;
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NoteCreateOrConnectWithoutcategoryInput>>;
};

export type NoteCreateOrConnectWithoutcategoryInput = {
  where: NoteWhereUniqueInput;
  create: NoteCreateWithoutCategoryInput;
};

export type NoteCreateWithoutCategoryInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
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
  userId?: Maybe<StringFilter>;
  categoryId?: Maybe<StringFilter>;
};

export type NoteUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutNotesInput>;
};

export type NoteUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NoteUpdateManyWithWhereWithoutCategoryInput = {
  where: NoteScalarWhereInput;
  data: NoteUpdateManyMutationInput;
};

export type NoteUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<NoteCreateWithoutCategoryInput>>;
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
  set?: Maybe<Array<NoteWhereUniqueInput>>;
  disconnect?: Maybe<Array<NoteWhereUniqueInput>>;
  delete?: Maybe<Array<NoteWhereUniqueInput>>;
  update?: Maybe<Array<NoteUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<NoteUpdateManyWithWhereWithoutCategoryInput>>;
  deleteMany?: Maybe<Array<NoteScalarWhereInput>>;
  upsert?: Maybe<Array<NoteUpsertWithWhereUniqueWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<NoteCreateOrConnectWithoutcategoryInput>>;
};

export type NoteUpdateWithWhereUniqueWithoutCategoryInput = {
  where: NoteWhereUniqueInput;
  data: NoteUpdateWithoutCategoryInput;
};

export type NoteUpdateWithoutCategoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NoteUpsertWithWhereUniqueWithoutCategoryInput = {
  where: NoteWhereUniqueInput;
  update: NoteUpdateWithoutCategoryInput;
  create: NoteCreateWithoutCategoryInput;
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
  userId?: Maybe<StringFilter>;
  categoryId?: Maybe<StringFilter>;
};

export type NoteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  password: Scalars['String'];
  categories: Array<Category>;
};


export type UserCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CategoryWhereUniqueInput>;
  after?: Maybe<CategoryWhereUniqueInput>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  categories?: Maybe<CategoryCreateManyWithoutUserInput>;
};

export type UserCreateOneWithoutCategoriesInput = {
  create?: Maybe<UserCreateWithoutCategoriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcategoriesInput>;
};

export type UserCreateOrConnectWithoutcategoriesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCategoriesInput;
};

export type UserCreateWithoutCategoriesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutUserInput>;
};

export type UserUpdateOneRequiredWithoutCategoriesInput = {
  create?: Maybe<UserCreateWithoutCategoriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCategoriesInput>;
  upsert?: Maybe<UserUpsertWithoutCategoriesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcategoriesInput>;
};

export type UserUpdateWithoutCategoriesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCategoriesInput = {
  update: UserUpdateWithoutCategoriesInput;
  create: UserCreateWithoutCategoriesInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CreateCategoryMutationVariables = Exact<{
  userId: Scalars['String'];
  label: Scalars['String'];
  primary?: Maybe<Scalars['Boolean']>;
  color: Scalars['String'];
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', category: { __typename?: 'Category', id: string, label: string, primary: boolean, color: string } };

export type CreateNoteMutationVariables = Exact<{
  userId: Scalars['String'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createOneNote: { __typename?: 'Note', id: string, title: string, content?: Maybe<string>, updatedAt: any } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  defaultCategory?: Maybe<Array<CategoryCreateWithoutUserInput> | CategoryCreateWithoutUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: string, email: string, categories: Array<{ __typename?: 'Category', id: string, label: string, color: string, primary: boolean, notes: Array<{ __typename?: 'Note', id: string }> }> } };

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['String'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteOneCategory?: Maybe<{ __typename?: 'Category', id: string }> };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteManyNote: { __typename?: 'BatchPayload', count: number }, deleteManyCategory: { __typename?: 'BatchPayload', count: number }, deleteOneUser?: Maybe<{ __typename?: 'User', id: string, email: string }> };

export type UpdateNoteMutationVariables = Exact<{
  noteId: Scalars['String'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateOneNote?: Maybe<{ __typename?: 'Note', title: string, content?: Maybe<string>, updatedAt: any, noteID: string, category: { __typename?: 'Category', id: string, label: string, color: string, primary: boolean } }> };

export type GetUserDataQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserDataQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', categories: Array<{ __typename?: 'Category', id: string, label: string, color: string, primary: boolean, notes: Array<{ __typename?: 'Note', id: string, title: string, content?: Maybe<string>, updatedAt: any }> }> }> };


export const CreateCategoryDocument = `
    mutation createCategory($userId: String!, $label: String!, $primary: Boolean = false, $color: String!) {
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
    mutation createNote($userId: String!, $categoryId: String!, $title: String!, $content: String!) {
  createOneNote(
    data: {userId: $userId, category: {connect: {id: $categoryId}}, title: $title, content: $content}
  ) {
    id
    title
    content
    updatedAt
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
export const CreateUserDocument = `
    mutation createUser($email: String!, $password: String!, $defaultCategory: [CategoryCreateWithoutUserInput!]) {
  createOneUser(
    data: {email: $email, password: $password, categories: {create: $defaultCategory}}
  ) {
    id
    email
    categories {
      id
      label
      color
      primary
      notes {
        id
      }
    }
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>
    ) => 
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables)(),
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
    mutation deleteUser($userId: String!) {
  deleteManyNote(where: {userId: {equals: $userId}}) {
    count
  }
  deleteManyCategory(where: {user: {id: {equals: $userId}}}) {
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
    query GetUserData($userId: String!) {
  user(where: {id: $userId}) {
    categories {
      id
      label
      color
      primary
      notes {
        id
        title
        content
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