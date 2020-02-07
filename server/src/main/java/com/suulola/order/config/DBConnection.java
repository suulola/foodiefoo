//package com.suulola.order.config;
//
//import java.sql.*;
//
//public class DBConnection {
//    private static final String DB_DRIVER_CLASS = "oracle.jdbc.driver.OracleDriver";
//    private static final String DB_URL = "jdbc:oracle:thin:@localhost:1521/XE";
//    private static final String DB_USERNAME = "system";
//    private static final String DB_PASSWORD = "system";
//
//
//
//    public static Connection getConnection() {
//        Connection connection = null;
//        try {
//            Class.forName(DB_DRIVER_CLASS);
//            System.out.println("Connecting to database. . . ");
//
//            connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
//
//        } catch (ClassNotFoundException e) {
//            e.printStackTrace();
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        System.out.println("Connected to database");
//        return connection;
//    }
//
//
//    public static void closeConnection(
//            Connection connection,
//            CallableStatement callableStatement,
//            ResultSet resultSet
//            ) {
//        if(connection != null) {
//            try {
//                connection.close();
//            } catch (SQLException e) {
//                e.printStackTrace();
//            }
//        }
//
//
//        if(callableStatement != null) {
//            try {
//                callableStatement.close();
//            } catch (SQLException e) {
//                e.printStackTrace();
//            }
//        }
//
//        if(resultSet != null) {
//            try {
//                resultSet.close();
//            } catch (SQLException e) {
//                e.printStackTrace();
//            }
//        }
//    }
//
//
//}
