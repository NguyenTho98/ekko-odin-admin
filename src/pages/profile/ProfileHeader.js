import { useState } from "react";
import { AlignJustify, Rss, Info, Image, Users, Edit } from "react-feather";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const ProfileHeader = ({ data, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("active", location);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="profile-header mb-2">
      <CardImg src={data.coverImg} alt="User Profile Image" top />
      <div className="position-relative">
        <div className="profile-img-container d-flex align-items-center">
          <div className="profile-img">
            <img
              className="rounded img-fluid"
              src={data.avatar}
              alt="Card image"
            />
          </div>
          <div className="profile-title ml-3">
            <h2 className="text-white">{data.username}</h2>
            <p className="text-white">{data.designation}</p>
          </div>
        </div>
      </div>
      <div className="profile-header-nav">
        <Navbar
          className="justify-content-end justify-content-md-between w-100"
          expand="md"
          light
        >
          <Button color="" className="btn-icon navbar-toggler" onClick={toggle}>
            <AlignJustify size={21} />
          </Button>
          <Collapse isOpen={isOpen} navbar>
            <div className="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
              <Nav className="mb-0" pills>
                <NavItem>
                  <Link to="/profile/info">
                    <NavLink className={`font-weight-bold ${location?.pathname?.includes("/profile/info") ? 'active' : ""}`}>
                      <span className="d-none d-md-block">
                        Thông tin tài khoản
                      </span>
                      <Rss className="d-block d-md-none" size={14} />
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/profile/change-password">
                    <NavLink className={`font-weight-bold ${location?.pathname?.includes("/profile/change-password") ? 'active' : ""}`}>
                      <span className="d-none d-md-block">Đổi mật khẩu</span>
                      <Info className="d-block d-md-none" size={14} />
                    </NavLink>
                  </Link>
                </NavItem>
                {/* <NavItem>
                  <NavLink className='font-weight-bold'>
                    <span className='d-none d-md-block'>Photos</span>
                    <Image className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='font-weight-bold'>
                    <span className='d-none d-md-block'>Friends</span>
                    <Users className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem> */}
              </Nav>
              {/* <Button color='primary'>
                <Edit className='d-block d-md-none' size={14} />
                <span className='font-weight-bold d-none d-md-block'>Edit</span>
              </Button> */}
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  );
};

export default ProfileHeader;
