package com.game.socket.service;

import com.game.socket.dto.Response;
import com.game.socket.entity.Client;
import io.netty.channel.ChannelHandlerContext;

public class MessageService {

    public static Response sendMessage(Client client, String message, ChannelHandlerContext ctx) {//add
        Response res = new Response();
        res.getData().put("id", client.getId());
        res.getData().put("message", message);
        res.getData().put("ts", System.currentTimeMillis());// 返回毫秒数
        res.getData().put("sysID", ctx.channel().id().toString());// 为了区分
        return res;
    }
}
