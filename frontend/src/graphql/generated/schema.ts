import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Exo = {
  __typename?: 'Exo';
  category: Category;
  date: Scalars['String'];
  id: Scalars['Int'];
  poids: Scalars['Float'];
  rep: Scalars['Float'];
  serie: Scalars['Float'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createExo: Exo;
  deleteCategory: Scalars['String'];
  deleteExo: Scalars['String'];
  updateCategory: Category;
  updateExo: Exo;
};


export type MutationCreateCategoryArgs = {
  data: NewCategoryInput;
};


export type MutationCreateExoArgs = {
  data: NewExoInput;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Float'];
};


export type MutationDeleteExoArgs = {
  exoId: Scalars['Float'];
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['Float'];
  data: UpdateCategoryInput;
};


export type MutationUpdateExoArgs = {
  data: UpdateExoInput;
  exoId: Scalars['Float'];
};

export type NewCategoryInput = {
  name: Scalars['String'];
};

export type NewExoInput = {
  category: ObjectId;
  date: Scalars['String'];
  poids: Scalars['Float'];
  rep: Scalars['Float'];
  serie: Scalars['Float'];
  title: Scalars['String'];
};

export type ObjectId = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  exos: Array<Exo>;
  getCatById: Category;
  getExoById: Exo;
};


export type QueryCategoriesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryExosArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryGetCatByIdArgs = {
  catId: Scalars['Int'];
};


export type QueryGetExoByIdArgs = {
  exoId: Scalars['Int'];
};

export type UpdateCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateExoInput = {
  category?: InputMaybe<ObjectId>;
  date?: InputMaybe<Scalars['String']>;
  poids?: InputMaybe<Scalars['Float']>;
  rep?: InputMaybe<Scalars['Float']>;
  serie?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateCategoryMutationVariables = Exact<{
  data: NewCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', id: number, name: string } };

export type CreateExoMutationVariables = Exact<{
  data: NewExoInput;
}>;


export type CreateExoMutation = { __typename?: 'Mutation', createExo: { __typename?: 'Exo', id: number, category: { __typename?: 'Category', id: number } } };

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['Float'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: string };

export type DeleteExoMutationVariables = Exact<{
  exoId: Scalars['Float'];
}>;


export type DeleteExoMutation = { __typename?: 'Mutation', deleteExo: string };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type GetCatByIdQueryVariables = Exact<{
  catId: Scalars['Int'];
}>;


export type GetCatByIdQuery = { __typename?: 'Query', getCatById: { __typename?: 'Category', id: number, name: string } };

export type GetExoByIdQueryVariables = Exact<{
  exoId: Scalars['Int'];
}>;


export type GetExoByIdQuery = { __typename?: 'Query', getExoById: { __typename?: 'Exo', id: number, title: string, poids: number, rep: number, serie: number, category: { __typename?: 'Category', id: number } } };

export type ExosQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['Int']>;
}>;


export type ExosQuery = { __typename?: 'Query', exos: Array<{ __typename?: 'Exo', id: number, poids: number, serie: number, rep: number, title: string, date: string, category: { __typename?: 'Category', id: number, name: string } }> };

export type UpdateCategoryMutationVariables = Exact<{
  data: UpdateCategoryInput;
  categoryId: Scalars['Float'];
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Category', id: number } };

export type UpdateExoMutationVariables = Exact<{
  data: UpdateExoInput;
  exoId: Scalars['Float'];
}>;


export type UpdateExoMutation = { __typename?: 'Mutation', updateExo: { __typename?: 'Exo', id: number } };


export const CreateCategoryDocument = gql`
    mutation createCategory($data: NewCategoryInput!) {
  createCategory(data: $data) {
    id
    name
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const CreateExoDocument = gql`
    mutation CreateExo($data: NewExoInput!) {
  createExo(data: $data) {
    id
    category {
      id
    }
  }
}
    `;
export type CreateExoMutationFn = Apollo.MutationFunction<CreateExoMutation, CreateExoMutationVariables>;

/**
 * __useCreateExoMutation__
 *
 * To run a mutation, you first call `useCreateExoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExoMutation, { data, loading, error }] = useCreateExoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateExoMutation(baseOptions?: Apollo.MutationHookOptions<CreateExoMutation, CreateExoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExoMutation, CreateExoMutationVariables>(CreateExoDocument, options);
      }
export type CreateExoMutationHookResult = ReturnType<typeof useCreateExoMutation>;
export type CreateExoMutationResult = Apollo.MutationResult<CreateExoMutation>;
export type CreateExoMutationOptions = Apollo.BaseMutationOptions<CreateExoMutation, CreateExoMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($categoryId: Float!) {
  deleteCategory(categoryId: $categoryId)
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const DeleteExoDocument = gql`
    mutation DeleteExo($exoId: Float!) {
  deleteExo(exoId: $exoId)
}
    `;
export type DeleteExoMutationFn = Apollo.MutationFunction<DeleteExoMutation, DeleteExoMutationVariables>;

/**
 * __useDeleteExoMutation__
 *
 * To run a mutation, you first call `useDeleteExoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExoMutation, { data, loading, error }] = useDeleteExoMutation({
 *   variables: {
 *      exoId: // value for 'exoId'
 *   },
 * });
 */
export function useDeleteExoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExoMutation, DeleteExoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExoMutation, DeleteExoMutationVariables>(DeleteExoDocument, options);
      }
export type DeleteExoMutationHookResult = ReturnType<typeof useDeleteExoMutation>;
export type DeleteExoMutationResult = Apollo.MutationResult<DeleteExoMutation>;
export type DeleteExoMutationOptions = Apollo.BaseMutationOptions<DeleteExoMutation, DeleteExoMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const GetCatByIdDocument = gql`
    query GetCatById($catId: Int!) {
  getCatById(catId: $catId) {
    id
    name
  }
}
    `;

/**
 * __useGetCatByIdQuery__
 *
 * To run a query within a React component, call `useGetCatByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatByIdQuery({
 *   variables: {
 *      catId: // value for 'catId'
 *   },
 * });
 */
export function useGetCatByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCatByIdQuery, GetCatByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatByIdQuery, GetCatByIdQueryVariables>(GetCatByIdDocument, options);
      }
export function useGetCatByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatByIdQuery, GetCatByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatByIdQuery, GetCatByIdQueryVariables>(GetCatByIdDocument, options);
        }
export type GetCatByIdQueryHookResult = ReturnType<typeof useGetCatByIdQuery>;
export type GetCatByIdLazyQueryHookResult = ReturnType<typeof useGetCatByIdLazyQuery>;
export type GetCatByIdQueryResult = Apollo.QueryResult<GetCatByIdQuery, GetCatByIdQueryVariables>;
export const GetExoByIdDocument = gql`
    query GetExoById($exoId: Int!) {
  getExoById(exoId: $exoId) {
    id
    title
    poids
    rep
    serie
    category {
      id
    }
  }
}
    `;

/**
 * __useGetExoByIdQuery__
 *
 * To run a query within a React component, call `useGetExoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExoByIdQuery({
 *   variables: {
 *      exoId: // value for 'exoId'
 *   },
 * });
 */
export function useGetExoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetExoByIdQuery, GetExoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExoByIdQuery, GetExoByIdQueryVariables>(GetExoByIdDocument, options);
      }
export function useGetExoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExoByIdQuery, GetExoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExoByIdQuery, GetExoByIdQueryVariables>(GetExoByIdDocument, options);
        }
export type GetExoByIdQueryHookResult = ReturnType<typeof useGetExoByIdQuery>;
export type GetExoByIdLazyQueryHookResult = ReturnType<typeof useGetExoByIdLazyQuery>;
export type GetExoByIdQueryResult = Apollo.QueryResult<GetExoByIdQuery, GetExoByIdQueryVariables>;
export const ExosDocument = gql`
    query Exos($categoryId: Int) {
  exos(categoryId: $categoryId) {
    id
    poids
    serie
    rep
    title
    date
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useExosQuery__
 *
 * To run a query within a React component, call `useExosQuery` and pass it any options that fit your needs.
 * When your component renders, `useExosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExosQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useExosQuery(baseOptions?: Apollo.QueryHookOptions<ExosQuery, ExosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExosQuery, ExosQueryVariables>(ExosDocument, options);
      }
export function useExosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExosQuery, ExosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExosQuery, ExosQueryVariables>(ExosDocument, options);
        }
export type ExosQueryHookResult = ReturnType<typeof useExosQuery>;
export type ExosLazyQueryHookResult = ReturnType<typeof useExosLazyQuery>;
export type ExosQueryResult = Apollo.QueryResult<ExosQuery, ExosQueryVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($data: UpdateCategoryInput!, $categoryId: Float!) {
  updateCategory(data: $data, categoryId: $categoryId) {
    id
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const UpdateExoDocument = gql`
    mutation UpdateExo($data: UpdateExoInput!, $exoId: Float!) {
  updateExo(data: $data, exoId: $exoId) {
    id
  }
}
    `;
export type UpdateExoMutationFn = Apollo.MutationFunction<UpdateExoMutation, UpdateExoMutationVariables>;

/**
 * __useUpdateExoMutation__
 *
 * To run a mutation, you first call `useUpdateExoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExoMutation, { data, loading, error }] = useUpdateExoMutation({
 *   variables: {
 *      data: // value for 'data'
 *      exoId: // value for 'exoId'
 *   },
 * });
 */
export function useUpdateExoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExoMutation, UpdateExoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExoMutation, UpdateExoMutationVariables>(UpdateExoDocument, options);
      }
export type UpdateExoMutationHookResult = ReturnType<typeof useUpdateExoMutation>;
export type UpdateExoMutationResult = Apollo.MutationResult<UpdateExoMutation>;
export type UpdateExoMutationOptions = Apollo.BaseMutationOptions<UpdateExoMutation, UpdateExoMutationVariables>;