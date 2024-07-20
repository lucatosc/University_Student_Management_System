import React from 'react';
import DynamicNavbar from '../components/navbars/DynamicNavbar';
import { useAuth } from '../contexts/authContext';
import LoadingSpinner from '../components/spinners/LoadingSpinner';

export default function AdminLayout({ isLoading, children }) {
  const { setAdminData } = useAuth();

  return (
    <>
      <DynamicNavbar
        options={[
          {
            title: 'Home',
            path: '/admin',
          },
          {
            title: 'Register Instructor',
            path: '/admin/instructors/register',
          },
          {
            title: 'Instructors',
            path: '/admin/instructors/action',
          },
          {
            title: 'Register Course',
            path: '/admin/courses/register',
          },
          {
            title: 'Courses',
            path: '/admin/courses/action',
          },
          {
            title: 'Settings',
            path: '/admin/settings',
          },
        ]}
        functionalItem={{
          title: 'Logout',
          function: () => {
            setAdminData(null);
            localStorage.removeItem('admin');
          },
        }}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='container mt-4'>{children}</div>
      )}
    </>
  );
}
