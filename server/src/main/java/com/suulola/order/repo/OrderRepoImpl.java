package com.suulola.order.repo;

import com.suulola.order.config.DBConnection;
import com.suulola.order.model.Order;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class OrderRepoImpl implements OrderRepo {


    @Override
    public List<Order> findAll() {
        List<Order> orders = new ArrayList<>();
        Connection connection = null;
        CallableStatement callableStatement = null;
        ResultSet resultSet = null;

        try {
            connection = DBConnection.getConnection();
            callableStatement = connection.prepareCall("{ call getAllOrders(?,?) }");
            callableStatement.registerOutParameter(1, Types.REF_CURSOR);
            callableStatement.registerOutParameter(2, Types.VARCHAR);
            callableStatement.execute();

            resultSet = (ResultSet) callableStatement.getObject(1);
            System.out.println(resultSet.toString());

            while (resultSet.next()) {
                Order order = new Order();
                order.setId(resultSet.getLong("id"));
                order.setFoodContent(resultSet.getString("food_content"));
                order.setFoodServed(Boolean.valueOf(resultSet.getString("is_food_served")));
                order.setOrderDate(resultSet.getString("order_date"));
                order.setUserId(resultSet.getLong("userID"));

                orders.add(order);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBConnection.closeConnection(connection, callableStatement, resultSet);
        }

        return orders;
    }

    @Override
    public List<Order> findByUserID(Long userid) {
        List<Order> orders = new ArrayList<>();
        Connection connection = null;
        CallableStatement callableStatement = null;
        ResultSet resultSet = null;

        try {
            connection = DBConnection.getConnection();
            callableStatement = connection.prepareCall("{ call getOrdersByUserId(?,?,?) }");
            callableStatement.setLong(1, userid);
            callableStatement.registerOutParameter(2, Types.REF_CURSOR);
            callableStatement.registerOutParameter(3, Types.VARCHAR);
            callableStatement.execute();

            resultSet = (ResultSet) callableStatement.getObject(2);
            System.out.println(resultSet.toString());

            while (resultSet.next()) {
                Order order = new Order();
                order.setId(resultSet.getLong("id"));
                order.setFoodContent(resultSet.getString("food_content"));
                order.setFoodServed(Boolean.valueOf(resultSet.getString("is_food_served")));
                order.setOrderDate(resultSet.getString("order_date"));
                order.setUserId(resultSet.getLong("userID"));

                orders.add(order);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBConnection.closeConnection(connection, callableStatement, resultSet);
        }

        return orders;
    }

    @Override
    public Order findById(Long id) {
        return null;
    }

    @Override
    public Order save(Order order) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Order update(Order order) {
        return null;
    }
}
