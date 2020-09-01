-- 루시와 엘라 찾기
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS 
WHERE (
    NAME = "Lucy" OR 
    NAME = "Ella" OR
    NAME = "Pickle" OR
    NAME = "Rogan" OR
    NAME = "Sabrina" OR
    NAME = "Mitty"
)
ORDER BY ANIMAL_ID

-- IN 사용
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY ANIMAL_ID



-- 이름에 el이 들어가는 동물 찾기
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS 
WHERE (
    ANIMAL_TYPE = "Dog" 
    AND NAME LIKE "%el%"
)
ORDER BY NAME

-- CASE 활용 
SELECT ANIMAL_ID, NAME, 
CASE WHEN (SEX_UPON_INTAKE LIKE '%NEUTERED%' OR SEX_UPON_INTAKE LIKE '%SPAYED%') THEN 'O' 
ELSE 'X' END AS '중성화' 
FROM ANIMAL_INS 
ORDER BY ANIMAL_ID

-- IF 활용 
SELECT ANIMAL_ID, NAME, 
IF(SEX_UPON_INTAKE LIKE '%NEUTERED%' OR SEX_UPON_INTAKE LIKE '%SPAYED%','O','X') AS '중성화' 
FROM ANIMAL_INS 
ORDER BY ANIMAL_ID

