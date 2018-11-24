//package com.game.socket.dao;
//
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.lang.reflect.InvocationTargetException;
//import java.lang.reflect.Method;
//import java.lang.reflect.ParameterizedType;
//import java.util.*;
//import java.util.concurrent.ConcurrentHashMap;
//import java.util.concurrent.ConcurrentLinkedQueue;
//import java.util.concurrent.ScheduledExecutorService;
//import java.util.concurrent.TimeUnit;
//import com.game.persistent.BaseEntity;
//
//public abstract class BaseDao<E extends BaseEntity> {
//
//    private static final Logger logger = LoggerFactory.getLogger(BaseDao.class);
//
//    // 每次提交DB的Entity数量,因为每个线程的栈容量是1MB
//    public static final int UPDATE_LIMIT = 500;
//
//    // 缓存数据
//    protected final ConcurrentHashMap<Long, E> cacheMap = new ConcurrentHashMap<>();
//
//    // 等待删除的数据
//    protected final ConcurrentLinkedQueue<E> deleteQueue = new ConcurrentLinkedQueue<>();
//    protected final ConcurrentHashMap<Long, Nothing> deleteIdMap = new ConcurrentHashMap<>();
//
//    // 等待更新的数据
//    protected final ConcurrentLinkedQueue<E> saveAndUpdateQueue = new ConcurrentLinkedQueue<>();
//    protected final ConcurrentHashMap<Long, Nothing> saveAndUpdateIdMap = new ConcurrentHashMap<>();
//
//
//    protected Class<E> entityClass;
//
//
//    public BaseDao() {
//
//    }
//
//    public E getEntityById(final Long id) {
//        if (null == id) return null;
//        return cacheMap.get(id);
//    }
//
//    public Collection<E> getAllEntity() {
//        if (null != cacheMap) {
//            return cacheMap.values();
//        }
//
//        return null;
//    }
//
//
//    protected enum Nothing {
//        NOTHING;
//
//        Nothing() {
//        }
//    }
//}
