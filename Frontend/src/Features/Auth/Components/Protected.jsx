import { Navigate } from 'react-router'
import useAuth from '../Hooks/useAuth'
import Loading from '../../../../Shared/Loading'

const Protected = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" />
    }
    return (
        children
    )
}

export default Protected