CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(255) NOT NULL,
  `DESCRIPTION` varchar(255) NOT NULL,
  `DATE` date NOT NULL DEFAULT curdate(),
  `isDONE` tinyint(1) NOT NULL DEFAULT 0,
  `CREATED_AT` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 15:44:56', '2023-05-04', '2323', '2323', 2, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 15:45:12', '2023-05-01', 'Criação de uma projeto to-do list com reactjs e NEST', 'Criar todo-list', 3, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 17:59:35', '2023-05-02', 'Criação de uma projeto to-do list com reactjs e NEST', 'Criar todo-list', 4, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 22:22:20', '2023-05-01', 'Testando rota dee criação de atividades', 'Teste01', 5, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 22:26:06', '2023-05-01', 'Testando rota dee criação de atividades', 'Teste02', 6, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 22:26:37', '2023-05-01', 'Testando rota dee criação de atividades', 'Teste02', 7, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 22:28:14', '2023-05-01', 'Testando rota dee criação de atividades', 'Teste03', 8, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 22:30:18', '2023-05-01', 'Testando rota dee criação de atividades', 'Teste06', 9, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 22:45:17', '0000-00-00', 'qwewqeqe', 'teqweqe', 10, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-01 22:48:04', '2023-05-18', 'qweeqweqweq', 'qweqwe', 11, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-03 18:01:53', '2023-05-31', 'qweqewqeeeeq', 'Testandoaaaa', 12, 0);
insert into `activity` (`CREATED_AT`, `DATE`, `DESCRIPTION`, `TITLE`, `id`, `isDONE`) values ('2023-05-03 18:14:11', '2023-05-16', 'qweqweeqweqwe', 'eqweqwe', 13, 0);
