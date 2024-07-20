import React from 'react';
import { useAuth } from '../contexts/authContext';
import DynamicNavbar from '../components/navbars/DynamicNavbar';
import LoadingSpinner from '../components/spinners/LoadingSpinner';

export default function StudentLayout({ isLoading, children }) {
  const { setStudentData } = useAuth();

  return (
    <>
      <DynamicNavbar
        options={[
          {
            title: 'Home',
            path: '/student',
          },
          {
            title: 'Courses',
            path: '/student/courses',
          },
          {
            title: 'Register Course',
            path: '/student/register/course',
          },
          {
            title: 'Attendance',
            path: '/student/attendance',
          },
          {
            title: 'Marks',
            path: '/student/marks',
          },
          {
            title: 'Settings',
            path: '/student/settings',
          },
        ]}
        functionalItem={{
          title: 'Logout',
          function: () => {
            setStudentData(null);
            localStorage.removeItem('student');
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
