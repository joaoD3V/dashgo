import { useQuery } from 'react-query';
import { UserData } from '../pages/users';
import { api } from '../services/api';

export async function getUsers(page: number) {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users: UserData[] = data.users.map((user: UserData) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(
    ['users', page],
    () => getUsers(page),
    { staleTime: 1000 * 50 * 10 } // 10 minutos
  );
}
