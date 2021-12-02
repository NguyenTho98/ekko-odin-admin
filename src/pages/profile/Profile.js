import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import ProfileAbout from './ProfileAbout'
import ProfileChangePassword from './ProfileChangePassword'
import ProfileHeader from './ProfileHeader'
import { Row, Col, Button } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import { Route } from "react-router-dom";
import '@styles/react/pages/page-profile.scss'

const Profile = (props) => {
  const [data, setData] = useState(null)
  const [block, setBlock] = useState(false)

  useEffect(() => {
    axios.get('/profile/data').then(response => setData(response.data))
  }, [])
  return (
    <Fragment>
      
      {data !== null ? (
        <div id='user-profile'>
          <Breadcrumbs breadCrumbTitle='Thông tin tài khoản'  />
          <Row>
            <Col sm='12'>
              <ProfileHeader data={data.header} location={props.location} />
            </Col>
          </Row>
          <section id='profile-info'>
            <Row>
              <Route path={"/profile/info"} component={ () => <ProfileAbout /> }/>
              <Route path={"/profile/change-password"} component={ProfileChangePassword} />
            </Row>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
