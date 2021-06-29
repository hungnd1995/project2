import React from "react";
import { getProduct } from "../../services/Api";
import { getImageProduct } from "../../shared/ultils";
import { getCommentsProduct } from "../../services/Api";
import { postComment } from "../../services/Api";
import moment from "moment";

const ProducDetailsPage = (props) => {
  const [product, setProduct] = React.useState(null);
  const id = props.match.params.id;

  const [comments, setComments] = React.useState(null);
  const [inputComment, setInputComment] = React.useState(null);

  React.useEffect(() => {
    getProduct(id, {}).then((res) => {
      setProduct(res.data.data);
    });
    getCommentsProduct(id, {}).then((res) => {
      // console.log(res.data.data.docs);
      setComments(res.data.data.docs);
    });
  }, [id]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputComment({ ...inputComment, [name]: value });
  };
  const onSubmitComment = (e) => {
    e.preventDefault();
    postComment(id, inputComment, {}).then((res) => {
      if (res.data.status == "success") {
        // Reset Form
        setInputComment({});

        // Get Comments by ID
        getCommentsProduct(id);
      }
      console.log(res.data);
    });
  };

  return (
    <>
      <div id="product">
        <div id="product-head" className="row">
          <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
            <img src={getImageProduct(product?.image)} />
          </div>
          <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
            <h1>{product?.name}</h1>
            <ul>
              <li>
                <span>Bảo hành:</span> 12 Tháng
              </li>
              <li>
                <span>Đi kèm:</span> {product?.accessories}
              </li>
              <li>
                <span>Tình trạng:</span> {product?.status}
              </li>
              <li>
                <span>Khuyến Mại:</span>
                {product?.promotion}
              </li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">{product?.price}đ</li>
              {product?.is_stock ? (
                <li className="text text-success">Còn hàng</li>
              ) : (
                <li className="text text-danger">Het Hang</li>
              )}
            </ul>
            <div id="add-cart">
              <a href="#">Mua ngay</a>
            </div>
          </div>
        </div>
        <div id="product-body" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>{product?.name}</h3>
            {product?.details}
          </div>
        </div>
        {/*	Comment	*/}
        <div id="comment" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="post">
              <div className="form-group">
                <label>Tên:</label>
                <input
                  name="comm_name"
                  required
                  type="text"
                  className="form-control"
                  onChange={onChangeInput}
                  value={inputComment?.name || ""}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  name="comm_mail"
                  required
                  type="email"
                  className="form-control"
                  id="pwd"
                  onChange={onChangeInput}
                  value={inputComment?.email || ""}
                />
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="comm_details"
                  required
                  rows={8}
                  className="form-control"
                  defaultValue={""}
                  onChange={onChangeInput}
                  value={inputComment?.content || ""}
                />
              </div>
              <button
                onClick={onSubmitComment}
                type="submit"
                name="sbm"
                className="btn btn-primary"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
        {/*	End Comment	*/}
        {/*	Comments List	*/}

        {comments?.length && (
          <div id="comments-list" className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {comments.map((comment) => {
                const m = moment(comment.createdAt);
                return (
                  <div className="comment-item">
                    <ul>
                      <li>
                        <b>{comment.name}</b>
                      </li>
                      <li>{m.fromNow()}</li>
                      <li>
                        <p>{comment.content}</p>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/*	End Comments List	*/}
      </div>
      {/*	End Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProducDetailsPage;
