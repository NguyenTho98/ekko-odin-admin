// ** React Imports
import { useState, useEffect, Fragment, useCallback } from "react";
import { Link, withRouter } from "react-router-dom";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown, Edit, Plus, Trash } from "react-feather";
import DataTable from "react-data-table-component";
import {
  Button,
  Label,
  Input,
  CustomInput,
  Row,
  Col,
  Card,
  UncontrolledTooltip,
} from "reactstrap";

// ** Store & Actions
import { connect } from "react-redux";
import { actionGetStudents } from "./StudentAction";
// ** Styles
import "@styles/react/apps/app-invoice.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";
import { isEmpty } from "../../utility/Utils";
import AddOrEditStudentModal from "./AddOrEditStudentModal";
import DeleteStudentModal from "./DeleteStudentModal";
const CustomHeader = ({
  handleFilter,
  value,
  handleStatusValue,
  statusValue,
  handlePerPage,
  rowsPerPage,
  handleAddNew,
}) => {
  return (
    <div className="invoice-list-table-header w-100 py-2">
      <Row>
        <Col lg="6" className="d-flex align-items-student px-0 px-lg-1">
          <div className="d-flex align-items-student mr-2">
            <Label for="rows-per-page">Hiện thị</Label>
            <CustomInput
              className="form-control ml-50 pr-3"
              type="select"
              id="rows-per-page"
              value={rowsPerPage}
              onChange={handlePerPage}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </CustomInput>
          </div>
          <Button.Ripple onClick={handleAddNew} color="primary">
            <Plus size={18} />
            <span className="align-middle ml-25">Thêm mới</span>
          </Button.Ripple>
        </Col>
        <Col
          lg="6"
          className="actions-right d-flex align-items-student justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0"
        >
          <div className="d-flex align-items-student">
            <Label for="search-invoice">Tìm kiếm</Label>
            <Input
              id="search-invoice"
              className="ml-50 mr-2 w-100"
              type="text"
              value={value}
              onChange={(e) => handleFilter(e.target.value)}
              placeholder="Tìm kiếm tên học viên"
            />
          </div>
          {/* <Input
            className="w-auto "
            type="select"
            value={statusValue}
            onChange={handleStatusValue}
          >
            <option value="">Select Status</option>
            <option value="downloaded">Downloaded</option>
            <option value="draft">Draft</option>
            <option value="paid">Paid</option>
            <option value="partial payment">Partial Payment</option>
            <option value="past due">Past Due</option>
            <option value="partial payment">Partial Payment</option>
          </Input> */}
        </Col>
      </Row>
    </div>
  );
};
let params = {
  offset: 0,
  limit: 20,
};
const Student = (props) => {
  const { profile, actionGetStudents, students = {}, isFetching } = props;
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [selectedItemDelete, setSelectedItemDelete] = useState({});
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusValue, setStatusValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  useEffect(() => {
    return () => {
      params = {
        offset: 0,
        limit: 10,
      };
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(profile)) {
      console.log("students", students);
      handleFetchStudent(params);
    }
  }, [profile]);

  const handleFetchStudent = (params = {}) => {
    actionGetStudents({ ...params, offset: params.offset - 1 });
  };

  const handleEditItem = (items = {}) => {
    setSelectedItem(items);
    setVisibleModal(true);
  };

  const handleEditItemDelete = (items = {}) => {
    setSelectedItemDelete(items);
    setVisibleModalDelete(true);
  };

  const columns = [
    {
      name: "#",
      selector: "id",
      cell: (row) => <span>{`#${row.id}`}</span>,
    },
    {
      name: "Tiêu đề",
      selector: "title",
      sortable: true,
      cell: (row) => <span>{row.title || "---"}</span>,
    },
    {
      name: "Loại học viên",
      selector: "type",
      sortable: true,
      cell: (row) => row.type || "---",
    },
    {
      name: "Số lượng",
      selector: "quantity",
      sortable: true,
      cell: (row) => row.quantity || "---",
    },
    {
      name: "Quà tặng",
      selector: "gift",
      sortable: true,
      cell: (row) => row?.gift || "---",
    },
    {
      name: "Giảm giá(%)",
      selector: "discount",
      sortable: true,
      cell: (row) => row?.discount || "---",
    },
    {
      name: "Ngày bắt đầu",
      selector: "start_date",
      sortable: true,
      cell: (row) => row?.start_date || "---",
    },
    {
      name: "Ngày kết thúc",
      selector: "end_date",
      sortable: true,
      cell: (row) => row?.end_date || "---",
    },
    {
      name: "Ghi chú",
      selector: "note",
      sortable: true,
      minWidth: "200px",
      cell: (row) => row?.note || "---",
    },
    {
      name: "Khóa học",
      selector: "course",
      sortable: true,
      cell: (row) => JSON.stringify(row?.course) || "---",
    },
    {
      name: "Action",
      minWidth: "110px",
      selector: "",
      sortable: true,
      cell: (row) => (
        <div className="column-action d-flex align-items-student">
          <Trash
            style={{ cursor: "pointer" }}
            size={17}
            id={`send-tooltip-${row.id}`}
            onClick={() => handleEditItemDelete(row)}
          />
          <UncontrolledTooltip
            placement="top"
            target={`send-tooltip-${row.id}`}
          >
            Delete
          </UncontrolledTooltip>
          <Edit
            style={{ cursor: "pointer" }}
            size={17}
            className="mx-1"
            id={`pw-tooltip-${row.id}`}
            onClick={() => handleEditItem(row)}
          />
          <UncontrolledTooltip placement="top" target={`pw-tooltip-${row.id}`}>
            Edit
          </UncontrolledTooltip>
        </div>
      ),
    },
  ];
  //   useEffect(() => {
  //     dispatch(
  //       getData({
  //         page: currentPage,
  //         perPage: rowsPerPage,
  //         status: statusValue,
  //         q: value,
  //       })
  //     );
  //   }, [dispatch, store.data.length]);

  const handleFilter = (val) => {
    setValue(val);
    // dispatch(
    //   getData({
    //     page: currentPage,
    //     perPage: rowsPerPage,
    //     status: statusValue,
    //     q: val,
    //   })
    // );
  };

  const handlePerPage = (e) => {
    // dispatch(
    //   getData({
    //     page: currentPage,
    //     perPage: parseInt(e.target.value),
    //     status: statusValue,
    //     q: value,
    //   })
    // );
    setRowsPerPage(parseInt(e.target.value));
  };

  const handleStatusValue = (e) => {
    setStatusValue(e.target.value);
    // dispatch(
    //   getData({
    //     page: currentPage,
    //     perPage: rowsPerPage,
    //     status: e.target.value,
    //     q: value,
    //   })
    // );
  };

  const handlePagination = (page) => {
    // dispatch(
    //   getData({
    //     page: page.selected + 1,
    //     perPage: rowsPerPage,
    //     status: statusValue,
    //     q: value,
    //   })
    // );
    setCurrentPage(page.selected + 1);
  };
  const handleAddNew = useCallback(() => {
    setVisibleModal(true);
  }, []);
  const CustomPagination = () => {
    const count = Number((students.count / rowsPerPage).toFixed(0));
    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=""
        breakLabel="..."
        previousLabel=""
        activeClassName="active"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={"pagination react-paginate justify-content-end p-1"}
      />
    );
  };

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle="Học viên" />
      <div className="invoice-list-wrapper">
        <Card>
          <div className="invoice-list-dataTable">
            <DataTable
              noHeader
              pagination
              paginationServer
              subHeader={true}
              columns={columns}
              responsive={true}
              sortIcon={<ChevronDown />}
              className="react-dataTable"
              defaultSortField="invoiceId"
              paginationDefaultPage={currentPage}
              paginationComponent={CustomPagination}
              data={students.results}
              subHeaderComponent={
                <CustomHeader
                  handleAddNew={handleAddNew}
                  value={value}
                  statusValue={statusValue}
                  rowsPerPage={rowsPerPage}
                  handleFilter={handleFilter}
                  handlePerPage={handlePerPage}
                  handleStatusValue={handleStatusValue}
                />
              }
            />
          </div>
        </Card>
      </div>
      {visibleModal && (
        <AddOrEditStudentModal
          visible={visibleModal}
          onCancel={(isRefreshData) => {
            if (isRefreshData) {
              handleFetchStudent(params);
            }
            setSelectedItem({});
            setVisibleModal(false);
          }}
          item={selectedItem}
        />
      )}
      {visibleModalDelete && (
        <DeleteStudentModal
          visible={visibleModalDelete}
          onCancel={() => {
            setSelectedItemDelete({});
            setVisibleModalDelete(false);
          }}
          handleFetchStudent={() => handleFetchStudent(params)}
          item={selectedItemDelete}
        />
      )}
    </Fragment>
  );
};

export default connect(
  (state) => ({
    profile: state.system?.profile,
    students: state.student?.students,
    isFetching: state.student?.isFetching,
  }),
  { actionGetStudents }
)(withRouter(Student));
