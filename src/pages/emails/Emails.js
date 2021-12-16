// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { useParams, withRouter } from 'react-router-dom'

// ** Email App Component Imports
import Mails from './Mails'
import Sidebar from './Sidebar'

// ** Third Party Components
import classnames from 'classnames'
import { actionGetEmailss } from "./EmailsAction";
// ** Store & Actions
import { connect, useDispatch, useSelector } from 'react-redux'
import {
  getMails,
  selectMail,
  updateMails,
  paginateMail,
  selectAllMail,
  resetSelectedMail,
  selectCurrentMail,
  updateMailLabel
} from './store/actions'

// ** Styles
import '@styles/react/apps/app-email.scss'
import { isEmpty } from '../../utility/Utils'

const EmailApp = (props) => {
  const { profile, actionGetEmailss, emailss = {}, isFetching } = props;
  console.log("emails", emailss);
  // ** States
  const [query, setQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [composeOpen, setComposeOpen] = useState(false)

  // ** Toggle Compose Function
  const toggleCompose = () => setComposeOpen(!composeOpen)

  // ** Store Variables
  const dispatch = useDispatch()
  const store = useSelector(state => state.email)
  // ** Vars
  const params = useParams()

  // ** UseEffect: GET initial data on Mount
  useEffect(() => {
    dispatch(getMails({ q: query || '', folder: params.folder || 'inbox', label: params.label || '' }))
  }, [query, params.folder, params.label])

  useEffect(() => {
    if (!isEmpty(profile)) {
      handleFetchEmails(params);
    }
  }, [profile]);

  const handleFetchEmails = (params = {}) => {
    actionGetEmailss({ ...params });
  };
  return (
    <Fragment>
      <Sidebar
        // store={}
        dispatch={dispatch}
        getMails={getMails}
        sidebarOpen={sidebarOpen}
        toggleCompose={toggleCompose}
        setSidebarOpen={setSidebarOpen}
        resetSelectedMail={resetSelectedMail}
      />
      <div className='content-right'>
        <div className='content-body'>
          <div
            className={classnames('body-content-overlay', {
              show: sidebarOpen
            })}
            onClick={() => setSidebarOpen(false)}
          ></div>
          <Mails
            emailss={emailss.results}
            query={query}
            setQuery={setQuery}
            dispatch={dispatch}
            getMails={getMails}
            selectMail={selectMail}
            updateMails={updateMails}
            composeOpen={composeOpen}
            paginateMail={paginateMail}
            selectAllMail={selectAllMail}
            toggleCompose={toggleCompose}
            setSidebarOpen={setSidebarOpen}
            updateMailLabel={updateMailLabel}
            selectCurrentMail={selectCurrentMail}
            resetSelectedMail={resetSelectedMail}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default connect(
  (state) => ({
    profile: state.system?.profile,
    emailss: state.emails?.emailss,
    isFetching: state.emails?.isFetching,
  }),
  { actionGetEmailss }
)(withRouter(EmailApp));