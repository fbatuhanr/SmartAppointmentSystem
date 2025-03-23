import { useGet } from '../common/useGet';

export const useDoctor = () => {

  const getAllDoctors = () => useGet<any[]>('doctor/all');

  const getPopularDoctors = () => useGet<any[]>('doctor/most-appointment');
  const getNewDoctors = () => useGet<any[]>('doctor/new-doctors');

  const getDoctorById = (id: string) => useGet<any>(`doctor/${id}`);
  // const getDoctorsByBranchId = (branchId: string) => useGet<any>(`doctor/branchId=${branchId}`);
  const getDoctorsByBranchId = (branchId: string) => useGet<any>(`doctor/search-branch?query=${branchId}`);

  return {
    getAllDoctors, 
    getNewDoctors, getPopularDoctors,
    getDoctorById, getDoctorsByBranchId
  };
};