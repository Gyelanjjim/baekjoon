-- 코드를 입력하세요
SELECT CONCAT('/home/grep/src/', 
              f.BOARD_ID,'/',
              f.FILE_ID,
              f.FILE_NAME,
              f.FILE_EXT  
       ) AS FILE_PATH
FROM USED_GOODS_FILE f
INNER JOIN USED_GOODS_BOARD b ON b.BOARD_ID = f.BOARD_ID
WHERE VIEWS = (
    SELECT MAX(VIEWS)
    FROM USED_GOODS_BOARD)
ORDER BY f.FILE_ID DESC
