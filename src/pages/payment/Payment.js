// ** React Imports
import React, { useState, useEffect, Fragment, useCallback } from "react";
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
import { actionGetPayments } from "./PaymentAction";
// ** Styles
import "@styles/react/apps/app-invoice.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";
import { isEmpty } from "../../utility/Utils";
import AddOrEditPaymentModal from "./AddOrEditPaymentModal";
import DeletePaymentModal from "./DeletePaymentModal";
import NumberFormat from "react-number-format";
import moment from "moment";
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
        <Col lg="6" className="d-flex align-items-payment px-0 px-lg-1">
          <div className="d-flex align-items-payment mr-2">
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
          className="actions-right d-flex align-items-payment justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0"
        >
          <div className="d-flex align-items-payment">
            <Label for="search-invoice">Tìm kiếm</Label>
            <Input
              id="search-invoice"
              className="ml-50 mr-2 w-100"
              type="text"
              value={value}
              onChange={(e) => handleFilter(e.target.value)}
              placeholder="Tìm kiếm tên hóa đơn"
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
  limit: 25,
};
const Payment = (props) => {
  const { profile, actionGetPayments, payments = {}, isFetching } = props;
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [selectedItemDelete, setSelectedItemDelete] = useState({});
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusValue, setStatusValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(params.limit);
  useEffect(() => {
    return () => {
      params = {
        offset: 0,
        limit: 25,
      };
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(profile)) {
      console.log("payments", payments);
      handleFetchPayment(params);
    }
  }, [profile]);

  const handleFetchPayment = (params = {}) => {
    actionGetPayments({ ...params });
  };

  const handleEditItem = (items = {}) => {
    setSelectedItem(items);
    setVisibleModal(true);
  };

  const handleEditItemDelete = (items = {}) => {
    setSelectedItemDelete(items);
    setVisibleModalDelete(true);
  };

  const renderMethod = (value) => {
    if (value === 2) {
      return "Chuyển tiền"
    }
    return "Tiền mặt"
  }

  const renderState = (value) => {
    if (value === 2) {
      return "Chờ"
    }
    if (value === 3) {
      return "Từ chối"
    }
    return "Hoàn thành"
  }
  const columns = [
    // {
    //   name: "#",
    //   selector: "id",
    //   cell: (row) => <span>{`#${row.id}`}</span>,
    // },
    {
      name: "Mã hóa đơn",
      selector: "code",
      sortable: true,
      cell: (row) => <span>{row.code || "---"}</span>,
    },
    {
      name: "Số tiền đóng",
      selector: "pay_amount",
      minWidth: "150px",
      sortable: true,
      cell: (row) =>
        (
          <React.Fragment>
            <NumberFormat
              value={row?.pay_amount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </React.Fragment>
        ) || "---",
    },
    {
      name: "Số tiền còn nợ",
      minWidth: "150px",
      selector: "rest_amount",
      sortable: true,
      cell: (row) =>
        (
          <React.Fragment>
            <NumberFormat
              value={row.rest_amount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </React.Fragment>
        ) || "---",
    },
    {
      name: "Ngày nộp",
      selector: "payment_date",
      minWidth: "150px",
      sortable: true,
      cell: (row) => (
        <React.Fragment>
          {row?.payment_date
            ? moment(row?.payment_date).format("DD-MM-YYYY")
            : "---"}
        </React.Fragment>
      ),
    },
    {
      name: "Ngày hẹn hoàn thành",
      selector: "plan_date",
      sortable: true,
      minWidth: "200px",
      cell: (row) => (
        <React.Fragment>
          {row?.plan_date
            ? moment(row?.plan_date).format("DD-MM-YYYY")
            : "---"}
        </React.Fragment>
      ),
    },
    {
      name: "Hình thức",
      selector: "method",
      sortable: true,
      cell: (row) => renderMethod(row.method) || "---",
    },
    {
      name: "Trạng thái",
      selector: "state",
      sortable: true,
      cell: (row) => renderState(row?.state) || "---",
    },
    {
      name: "Khuyễn mãi",
      selector: "reward",
      sortable: true,
      minWidth: "150px",
      cell: (row) => row?.reward?.title || "---",
    },
    {
      name: "Người nộp",
      selector: "payer",
      sortable: true,
      cell: (row) => row?.payer?.username || "---",
    },
    {
      name: "Người thu",
      selector: "cashier",
      sortable: true,
      cell: (row) => row?.cashier?.username || "---",
    },
    {
      name: "Ghi chú",
      selector: "note",
      sortable: true,
      cell: (row) => row?.note || "---",
    },
    {
      name: "Action",
      minWidth: "110px",
      selector: "",
      sortable: true,
      cell: (row) => (
        <div className="column-action d-flex align-items-payment">
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
    actionGetPayments({ ...params, limit: e.target.value });
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
    actionGetPayments({
      ...params,
      limit: rowsPerPage,
      offset: page.selected * rowsPerPage,
    });
    setCurrentPage(page.selected + 1);
  };
  const handleAddNew = useCallback(() => {
    setVisibleModal(true);
  }, []);
  const CustomPagination = () => {
    const count = Number((payments.count / rowsPerPage).toFixed(0));
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
      <Breadcrumbs breadCrumbTitle="Hóa đơn" />
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
              data={payments.results}
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
        <AddOrEditPaymentModal
          visible={visibleModal}
          onCancel={(isRefreshData) => {
            if (isRefreshData) {
              handleFetchPayment(params);
            }
            setSelectedItem({});
            setVisibleModal(false);
          }}
          item={selectedItem}
        />
      )}
      {visibleModalDelete && (
        <DeletePaymentModal
          visible={visibleModalDelete}
          onCancel={() => {
            setSelectedItemDelete({});
            setVisibleModalDelete(false);
          }}
          handleFetchPayment={() => handleFetchPayment(params)}
          item={selectedItemDelete}
        />
      )}
    </Fragment>
  );
};

export default connect(
  (state) => ({
    profile: state.system?.profile,
    payments: state.payment?.payments,
    isFetching: state.payment?.isFetching,
  }),
  { actionGetPayments }
)(withRouter(Payment));
