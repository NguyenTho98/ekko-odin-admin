// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'
import center from './../../pages/center/CenterReducer';
import course from './../../pages/course/CourseReducer';
import classRoom from '../../pages/classRoom/ClassRoomReducer';
import classes from '../../pages/classes/ClassesReducer';
import comment from '../../pages/comment/CommentReducer';
import reward from '../../pages/reward/RewardReducer';
import system from "../../pages/system/systemReducer";
import student from "../../pages/student/StudentReducer";
import payment from "../../pages/payment/PaymentReducer";
import contract from "../../pages/contract/ContractReducer";
import bussinessemployee from "../../pages/bussinessemployee/BussinessemployeeReducer";
import managers from "../../pages/managers/ManagersReducer";
import receptionist from "../../pages/receptionist/ReceptionistReducer";
import studentcare from "../../pages/studentcare/StudentcareReducer";
import teachers from "../../pages/teachers/TeachersReducer";
import emails from "../../pages/emails/EmailsReducer";
const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  center,
  course,
  classRoom,
  classes,
  comment,
  reward,
  system,
  student,
  payment,
  contract,
  bussinessemployee,
  managers,
  receptionist,
  studentcare,
  teachers,
  emails,
})

export default rootReducer
