import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { CareerApplicationInput, ContactInput, ErrorResponse, Faq, GetFaqsParams, GetProductsParams, HealthStatus, Job, LoanCalculationInput, LoanCalculationResult, MembershipApplicationInput, NewsItem, Product, SaccoStats, SubmissionResult } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSaccoStatsUrl: () => string;
/**
 * @summary Get SACCO key statistics
 */
export declare const getSaccoStats: (options?: Parameters<typeof customFetch>[1]) => Promise<SaccoStats>;
export declare const getGetSaccoStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetSaccoStatsQueryOptions: <TData = Awaited<ReturnType<typeof getSaccoStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSaccoStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSaccoStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSaccoStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getSaccoStats>>>;
export type GetSaccoStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get SACCO key statistics
 */
export declare function useGetSaccoStats<TData = Awaited<ReturnType<typeof getSaccoStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSaccoStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetProductsUrl: (params?: GetProductsParams) => string;
/**
 * @summary List all products
 */
export declare const getProducts: (params?: GetProductsParams, options?: Parameters<typeof customFetch>[1]) => Promise<Product[]>;
export declare const getGetProductsQueryKey: (params?: GetProductsParams) => readonly ["/api/products", ...GetProductsParams[]];
export declare const getGetProductsQueryOptions: <TData = Awaited<ReturnType<typeof getProducts>>, TError = ErrorType<unknown>>(params?: GetProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getProducts>>>;
export type GetProductsQueryError = ErrorType<unknown>;
/**
 * @summary List all products
 */
export declare function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = ErrorType<unknown>>(params?: GetProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetFeaturedProductsUrl: () => string;
/**
 * @summary Get featured products for homepage
 */
export declare const getFeaturedProducts: (options?: Parameters<typeof customFetch>[1]) => Promise<Product[]>;
export declare const getGetFeaturedProductsQueryKey: () => readonly ["/api/products/featured"];
export declare const getGetFeaturedProductsQueryOptions: <TData = Awaited<ReturnType<typeof getFeaturedProducts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeaturedProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFeaturedProducts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFeaturedProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getFeaturedProducts>>>;
export type GetFeaturedProductsQueryError = ErrorType<unknown>;
/**
 * @summary Get featured products for homepage
 */
export declare function useGetFeaturedProducts<TData = Awaited<ReturnType<typeof getFeaturedProducts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeaturedProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetFaqsUrl: (params?: GetFaqsParams) => string;
/**
 * @summary Get all FAQs
 */
export declare const getFaqs: (params?: GetFaqsParams, options?: Parameters<typeof customFetch>[1]) => Promise<Faq[]>;
export declare const getGetFaqsQueryKey: (params?: GetFaqsParams) => readonly ["/api/faqs", ...GetFaqsParams[]];
export declare const getGetFaqsQueryOptions: <TData = Awaited<ReturnType<typeof getFaqs>>, TError = ErrorType<unknown>>(params?: GetFaqsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFaqs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFaqs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFaqsQueryResult = NonNullable<Awaited<ReturnType<typeof getFaqs>>>;
export type GetFaqsQueryError = ErrorType<unknown>;
/**
 * @summary Get all FAQs
 */
export declare function useGetFaqs<TData = Awaited<ReturnType<typeof getFaqs>>, TError = ErrorType<unknown>>(params?: GetFaqsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFaqs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetJobsUrl: () => string;
/**
 * @summary Get all job openings
 */
export declare const getJobs: (options?: Parameters<typeof customFetch>[1]) => Promise<Job[]>;
export declare const getGetJobsQueryKey: () => readonly ["/api/jobs"];
export declare const getGetJobsQueryOptions: <TData = Awaited<ReturnType<typeof getJobs>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getJobs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetJobsQueryResult = NonNullable<Awaited<ReturnType<typeof getJobs>>>;
export type GetJobsQueryError = ErrorType<unknown>;
/**
 * @summary Get all job openings
 */
export declare function useGetJobs<TData = Awaited<ReturnType<typeof getJobs>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetNewsUrl: () => string;
/**
 * @summary Get latest news and announcements
 */
export declare const getNews: (options?: Parameters<typeof customFetch>[1]) => Promise<NewsItem[]>;
export declare const getGetNewsQueryKey: () => readonly ["/api/news"];
export declare const getGetNewsQueryOptions: <TData = Awaited<ReturnType<typeof getNews>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNews>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getNews>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetNewsQueryResult = NonNullable<Awaited<ReturnType<typeof getNews>>>;
export type GetNewsQueryError = ErrorType<unknown>;
/**
 * @summary Get latest news and announcements
 */
export declare function useGetNews<TData = Awaited<ReturnType<typeof getNews>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNews>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCalculateLoanUrl: () => string;
/**
 * @summary Calculate loan repayment
 */
export declare const calculateLoan: (loanCalculationInput: LoanCalculationInput, options?: Parameters<typeof customFetch>[1]) => Promise<LoanCalculationResult>;
export declare const getCalculateLoanMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof calculateLoan>>, TError, {
        data: BodyType<LoanCalculationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof calculateLoan>>, TError, {
    data: BodyType<LoanCalculationInput>;
}, TContext>;
export type CalculateLoanMutationResult = NonNullable<Awaited<ReturnType<typeof calculateLoan>>>;
export type CalculateLoanMutationBody = BodyType<LoanCalculationInput>;
export type CalculateLoanMutationError = ErrorType<ErrorResponse>;
/**
* @summary Calculate loan repayment
*/
export declare const useCalculateLoan: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof calculateLoan>>, TError, {
        data: BodyType<LoanCalculationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof calculateLoan>>, TError, {
    data: BodyType<LoanCalculationInput>;
}, TContext>;
export declare const getSubmitContactUrl: () => string;
/**
 * @summary Submit a contact form inquiry
 */
export declare const submitContact: (contactInput: ContactInput, options?: Parameters<typeof customFetch>[1]) => Promise<SubmissionResult>;
export declare const getSubmitContactMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export type SubmitContactMutationResult = NonNullable<Awaited<ReturnType<typeof submitContact>>>;
export type SubmitContactMutationBody = BodyType<ContactInput>;
export type SubmitContactMutationError = ErrorType<ErrorResponse>;
/**
* @summary Submit a contact form inquiry
*/
export declare const useSubmitContact: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export declare const getApplyMembershipUrl: () => string;
/**
 * @summary Submit a membership application
 */
export declare const applyMembership: (membershipApplicationInput: MembershipApplicationInput, options?: Parameters<typeof customFetch>[1]) => Promise<SubmissionResult>;
export declare const getApplyMembershipMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyMembership>>, TError, {
        data: BodyType<MembershipApplicationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof applyMembership>>, TError, {
    data: BodyType<MembershipApplicationInput>;
}, TContext>;
export type ApplyMembershipMutationResult = NonNullable<Awaited<ReturnType<typeof applyMembership>>>;
export type ApplyMembershipMutationBody = BodyType<MembershipApplicationInput>;
export type ApplyMembershipMutationError = ErrorType<ErrorResponse>;
/**
* @summary Submit a membership application
*/
export declare const useApplyMembership: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyMembership>>, TError, {
        data: BodyType<MembershipApplicationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof applyMembership>>, TError, {
    data: BodyType<MembershipApplicationInput>;
}, TContext>;
export declare const getApplyCareerUrl: () => string;
/**
 * @summary Submit a job application
 */
export declare const applyCareer: (careerApplicationInput: CareerApplicationInput, options?: Parameters<typeof customFetch>[1]) => Promise<SubmissionResult>;
export declare const getApplyCareerMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyCareer>>, TError, {
        data: BodyType<CareerApplicationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof applyCareer>>, TError, {
    data: BodyType<CareerApplicationInput>;
}, TContext>;
export type ApplyCareerMutationResult = NonNullable<Awaited<ReturnType<typeof applyCareer>>>;
export type ApplyCareerMutationBody = BodyType<CareerApplicationInput>;
export type ApplyCareerMutationError = ErrorType<ErrorResponse>;
/**
* @summary Submit a job application
*/
export declare const useApplyCareer: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyCareer>>, TError, {
        data: BodyType<CareerApplicationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof applyCareer>>, TError, {
    data: BodyType<CareerApplicationInput>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map