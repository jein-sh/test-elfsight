import { PropsWithChildren } from 'react'
import { Loader } from '../loader'
import { useGlobalLoading } from '../../providers/global-loading-provider'
import { Layout } from './styles'


export const LoaderLayout = ({ children }: PropsWithChildren) => {
  const { isLoading } = useGlobalLoading()

  return (
    <>
      {children}
      <Layout $visible={isLoading}>
        <Loader />
      </Layout>
    </>
  )
}
