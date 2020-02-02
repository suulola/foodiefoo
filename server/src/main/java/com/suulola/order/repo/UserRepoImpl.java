package com.suulola.order.repo;

import com.suulola.order.config.DBConnection;
import com.suulola.order.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


@Repository
public class UserRepoImpl implements UserRepo {
    @Autowired
    private OrderRepoImpl orderRepo;
    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        Connection connection = null;
        CallableStatement callableStatement = null;
        ResultSet resultSet = null;

        try {
            connection = DBConnection.getConnection();
            callableStatement = connection.prepareCall("{ call GETUSERS(?,?) }");
            callableStatement.registerOutParameter(1, Types.REF_CURSOR);
            callableStatement.registerOutParameter(2, Types.VARCHAR);
            callableStatement.execute();

            resultSet = (ResultSet) callableStatement.getObject(1);
            System.out.println(resultSet.toString());

            while (resultSet.next()) {
                User user = new User();
                user.setId(resultSet.getLong("id"));
                user.setUsername(resultSet.getString("username"));
                user.setPassword(resultSet.getString("password"));
                user.setOrders(orderRepo.findByUserID(resultSet.getLong("id")));
                users.add(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            DBConnection.closeConnection(connection, callableStatement, resultSet);
        }

        return users;
    }

    @Override
    public User findById(Long id) {
        return null;
    }


    @Override
    public User findByUsername(String username) {
        return null;
    }

    @Override
    public User save(User user) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public User update(User user) {
        return null;
    }
}
