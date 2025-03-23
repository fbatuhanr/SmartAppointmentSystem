import { useGet } from '../common/useGet';
// import { Branch } from '../../types/branch';

export const useBranch = () => {
  
  const getAllBranches = () => useGet<any[]>('branch/all');
  const searchBranches = (query: string) => useGet<any[]>(`branch/search?query=${query}`);

  return {
    getAllBranches,
    searchBranches,
  };
};