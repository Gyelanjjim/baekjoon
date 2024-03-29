-- 코드를 입력하세요

    SELECT r.FOOD_TYPE, REST_ID, REST_NAME, r.FAVORITES
    FROM REST_INFO r
    INNER JOIN (
        SELECT FOOD_TYPE, MAX(FAVORITES) AS FAVORITES
        FROM REST_INFO
        GROUP BY FOOD_TYPE
    ) f ON r.FAVORITES = f.FAVORITES AND r.FOOD_TYPE = f.FOOD_TYPE
    ORDER BY FOOD_TYPE DESC

