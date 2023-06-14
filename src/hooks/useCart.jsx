import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch ,data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`);
            console.log("response", response);
            return response.data;
          },
      })

      return [cart, refetch];
}

export default useCart;
