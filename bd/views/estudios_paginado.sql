CREATE VIEW 'estudios_paginado' AS 
SELECT e.folio, CONCAT(e.nombre, " ", e.paterno, " ", e.materno) AS solicitante, a.idarea, a.nombre as area FROM estudio_socioeconomico e LEFT JOIN areas a ON e.idarea = a.idarea