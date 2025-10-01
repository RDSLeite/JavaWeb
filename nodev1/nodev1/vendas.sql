
--
-- Banco de dados: `meubanco`
--
CREATE DATABASE IF NOT EXISTS `meubanco` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `meubanco`;

-- Estrutura da tabela `vendas`
--

DROP TABLE IF EXISTS `vendas`;
CREATE TABLE `vendas` (
  `id` int(11) NOT NULL,
  `datavenda` date NOT NULL,
  `nomecliente` text NOT NULL,
  `emailcliente` text NOT NULL,
  `totalvenda` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `vendas` ADD PRIMARY KEY (`id`);


ALTER TABLE `vendas` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;