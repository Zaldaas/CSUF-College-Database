import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Links from './pages/Links';
import Student from './pages/Student';
import StudentMenu from './pages/StudentMenu';
import StudentMyCourses from './pages/StudentMyCourses';
import StudentEnroll from './pages/StudentEnroll';
import Professor from './pages/Professor';
import ProfessorMenu from './pages/ProfessorMenu';
import ProfessorMyCourses from './pages/ProfessorMyCourses';
import ProfessorSection from './pages/ProfessorSection';
import ProfessorEnroll from './pages/ProfessorEnroll';
import Admin from './pages/Admin';
import AdminMenu from './pages/AdminMenu';
import AdminStudentList from './pages/AdminStudentList';
import AdminStudentForm from './pages/AdminStudentForm';
import AdminStudentDetail from './pages/AdminStudentDetail';
import AdminCourseList from './pages/AdminCourseList';
import AdminCourseForm from './pages/AdminCourseForm';
import AdminCourseDetail from './pages/AdminCourseDetail';
import AdminProfList from './pages/AdminProfList';
import AdminProfForm from './pages/AdminProfForm';
import AdminProfDetail from './pages/AdminProfDetail';
import AdminDepartmentList from './pages/AdminDepartmentList';
import AdminDepartmentForm from './pages/AdminDepartmentForm';
import AdminDepartmentDetail from './pages/AdminDepartmentDetail';

function App() {
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Our Welcome Page as the default route */}
        <Route path="/" element={<Welcome />} />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Links Page */}
        <Route path="/links" element={<Links />} />

        {/*Student Pages */}
        <Route path="/student" element={<Student/>} />
        <Route path="/student/:id/menu" element={<StudentMenu/>} />
        <Route path="/student/:id/mycourses" element={<StudentMyCourses/>} />
        <Route path="/student/:id/enroll" element={<StudentEnroll/>} />
        
        {/*Professor Pages */}
        <Route path="/professor" element={<Professor/>} />
        <Route path="/professor/:id/menu/" element={<ProfessorMenu/>} />
        <Route path="/professor/:id/mycourses" element={<ProfessorMyCourses/>} />
        <Route path="/professor/:id/section/:sectionId" element={<ProfessorSection/>} />
        <Route path="/professor/:id/enroll" element={<ProfessorEnroll/>} />
        {/*Administrator Pages */}
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/menu" element={<AdminMenu/>} />
        {/*Administrator Student Pages */}
        <Route path="/admin/studentlist" element={<AdminStudentList/>} />
        <Route path="/admin/student/:id" element={<AdminStudentDetail/>} />
        <Route path="/admin/student/:id/edit" element={<AdminStudentForm isEdit={true} />} />
        <Route path="/admin/newstudent" element={<AdminStudentForm/>} />
        {/*Administrator Course Pages */}
        <Route path="/admin/courselist" element={<AdminCourseList/>} />
        <Route path="/admin/course/:id" element={<AdminCourseDetail/>} />
        <Route path="/admin/course/:id/edit" element={<AdminCourseForm isEdit={true} />} />
        <Route path="/admin/newcourse" element={<AdminCourseForm/>} />
        {/*Administrator Professor Pages */}
        <Route path="/admin/proflist" element={<AdminProfList/>} />
        <Route path="/admin/prof/:id" element={<AdminProfDetail/>} />
        <Route path="/admin/prof/:id/edit" element={<AdminProfForm isEdit={true} />} />
        <Route path="/admin/newprof" element={<AdminProfForm/>} />
        {/*Administrator Department Pages */}
        <Route path="/admin/departmentlist" element={<AdminDepartmentList/>} />
        <Route path="/admin/department/:id" element={<AdminDepartmentDetail/>} />
        <Route path="/admin/department/:id/edit" element={<AdminDepartmentForm isEdit={true} />} />
        <Route path="/admin/newdepartment" element={<AdminDepartmentForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
