import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [pdfOrders, setPdfOrders] = useState([]);

  const fetchAllPdfOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/pdf/orders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setPdfOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/pdf/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllPdfOrders();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllPdfOrders();
  }, [token]);

  return (
    <div>
      <h3 className="mb-4 font-semibold">PDF Orders</h3>
      <div>
        {pdfOrders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
          >
            <img className="w-12" src={assets.pdf_icon} alt="PDF Order" />
            <div>
              {order.items.map((item, index) => (
                <p key={index} className="py-0.5">
                  {item.name} x {item.quantity}
                </p>
              ))}

              <p className="mt-3 mb-2 font-medium">
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <div>
                <p>{order.customer.email}</p>
                <p>{order.customer.phone}</p>
              </div>
            </div>

            <div>
              <p className="text-sm sm:text-[15px]">
                Items: {order.items.length}
              </p>
              <p className="mt-3">Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className="text-sm sm:text-[15px]">
              {order.amount ? `${currency}${order.amount}` : "Free"}
            </p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Processing">Processing</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
