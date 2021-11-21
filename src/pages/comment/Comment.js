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
import { actionGetComments } from "./CommentAction";
// ** Styles
import "@styles/react/apps/app-invoice.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";
import { isEmpty } from "../../utility/Utils";
import AddOrEditCommentModal from "./AddOrEditCommentModal";
import DeleteCommentModal from "./DeleteCommentModal";
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
        <Col lg="6" className="d-flex align-items-comment px-0 px-lg-1">
          <div className="d-flex align-items-comment mr-2">
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
          className="actions-right d-flex align-items-comment justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0"
        >
          <div className="d-flex align-items-comment">
            <Label for="search-invoice">Tìm kiếm</Label>
            <Input
              id="search-invoice"
              className="ml-50 mr-2 w-100"
              type="text"
              value={value}
              onChange={(e) => handleFilter(e.target.value)}
              placeholder="Tìm kiếm tên bình luận"
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
const Comment = (props) => {
  const { profile, actionGetComments, comments = {}, isFetching } = props;
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
    if (isEmpty(profile)) {
      console.log("comments", comments);
      handleFetchComment(params);
    }
  }, [profile]);

  const handleFetchComment = (params = {}) => {
    actionGetComments({ ...params, offset: params.offset - 1 });
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
      minWidth: "107px",
      selector: "id",
      cell: (row) => <span>{`#${row.id}`}</span>,
    },
    {
      name: "Tiêu đề",
      selector: "title",
      sortable: true,
      minWidth: "150px",
      cell: (row) => <span>{row.title || "---"}</span>,
    },
    {
      name: "Nội dung",
      selector: "content",
      sortable: true,
      minWidth: "200px",
      cell: (row) => row.content || "---",
    },
    {
      name: "Phân loại",
      selector: "category",
      sortable: true,
      minWidth: "200px",
      cell: (row) => row.category || "---",
    },
    {
      name: "Trạng thái",
      selector: "state",
      sortable: true,
      minWidth: "200px",
      cell: (row) => row?.state || "---",
    },
    {
      name: "Người dùng",
      selector: "users",
      sortable: true,
      minWidth: "200px",
      cell: (row) => row?.users || "---",
    },
    {
      name: "Trung tâm",
      selector: "centre",
      sortable: true,
      minWidth: "200px",
      cell: (row) => row?.centre || "---",
    },
    {
      name: "Lớp học",
      selector: "classes",
      sortable: true,
      minWidth: "200px",
      cell: (row) => row?.classes || "---",
    },
    {
      name: "Action",
      minWidth: "110px",
      selector: "",
      sortable: true,
      cell: (row) => (
        <div className="column-action d-flex align-items-comment">
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
    const count = Number((comments.count / rowsPerPage).toFixed(0));
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
      <Breadcrumbs breadCrumbTitle="Bình luận" />
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
              data={comments.results}
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
        <AddOrEditCommentModal
          visible={visibleModal}
          onCancel={(isRefreshData) => {
            if (isRefreshData) {
              handleFetchComment(params);
            }
            setSelectedItem({});
            setVisibleModal(false);
          }}
          item={selectedItem}
        />
      )}
      {visibleModalDelete && (
        <DeleteCommentModal
          visible={visibleModalDelete}
          onCancel={() => {
            setSelectedItemDelete({});
            setVisibleModalDelete(false);
          }}
          handleFetchComment={() => handleFetchComment(params)}
          item={selectedItemDelete}
        />
      )}
    </Fragment>
  );
};

export default connect(
  (state) => ({
    profile: state.system?.profile,
    comments: state.comment?.comments,
    isFetching: state.comment?.isFetching,
  }),
  { actionGetComments }
)(withRouter(Comment));
