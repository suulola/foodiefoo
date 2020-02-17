package com.suulola.order.controller.dto;

public class Response {

    private String responseCode;
    private String responseMessage;
    private Object data;

    public String getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(String responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public void setAll(
            String responseCode,
            String responseMessage,
            Object data
    ) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.data = data;
    }

}
