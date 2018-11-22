package com.game.socket.dao;

public class GameDaos {
    private static GameDaos instance = null;
    public static GameDaos getInstance() {
        return instance;
    }

    static {
        instance = new GameDaos();
    }

    private GameDaos() {





    }
}
