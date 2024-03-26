-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 29, 2024 at 07:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `formify`
--

-- --------------------------------------------------------

--
-- Table structure for table `allowed_domains`
--

CREATE TABLE `allowed_domains` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `form_id` bigint(20) UNSIGNED NOT NULL,
  `domain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `allowed_domains`
--

INSERT INTO `allowed_domains` (`id`, `form_id`, `domain`) VALUES
(1, 1, 'webtech.id'),
(4, 6, 'webtech.id');

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `response_id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `value` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `response_id`, `question_id`, `value`) VALUES
(1, 1, 1, 'Budi Setiawan'),
(2, 1, 2, 'Jakarta, Indonesia'),
(3, 1, 3, '2004-05-05'),
(4, 1, 4, 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `limit_one_response` tinyint(1) NOT NULL DEFAULT 0,
  `creator_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`id`, `name`, `slug`, `description`, `limit_one_response`, `creator_id`) VALUES
(1, 'Biodata - Web Tech Members', 'biodata', 'To save web tech members data', 1, 1),
(2, 'HTML and CSS Skills - Quiz', 'htmlcss-quiz', 'Fundamental web tests', 1, 1),
(6, 'Stacks of Web Tech Members', 'member-stacks', 'To collect all of favorite stacks', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_10_19_044534_create_forms_table', 1),
(6, '2022_10_19_044540_create_questions_table', 1),
(7, '2022_10_19_044554_create_allowed_domains_table', 1),
(8, '2022_10_19_044604_create_responses_table', 1),
(9, '2022_10_19_044610_create_answers_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(21, 'App\\Models\\User', 1, 'API_TOKEN', '3e9247e3fa5cf6faf445a37c59d24a77a30b8ec86432811e4302604ee58cfdc5', '[\"*\"]', NULL, NULL, '2022-10-24 07:45:47', '2022-10-24 07:45:47'),
(22, 'App\\Models\\User', 1, 'API_TOKEN', '082afc559500dca9702305ddc9d3530d4c3f4f888e8fe675d6208a0e974373aa', '[\"*\"]', NULL, NULL, '2022-10-24 07:45:47', '2022-10-24 07:45:47'),
(23, 'App\\Models\\User', 2, 'API_TOKEN', 'd9659b3a81cc8f7068c4b04791e1ea417e35b9289d69916f00dc349f07a14384', '[\"*\"]', NULL, NULL, '2022-10-24 07:45:47', '2022-10-24 07:45:47'),
(24, 'App\\Models\\User', 1, 'user1@webtech.id', '63f497349c7fd45611714c54d743231779a97db1ea5c61327606c81f83855d36', '[\"*\"]', NULL, NULL, '2024-02-28 19:32:46', '2024-02-28 19:32:46'),
(28, 'App\\Models\\User', 1, 'user1@webtech.id', 'c062d1b80b34d09a85495e5acef2dae143d06e90a53abc756ae825a9ffca848f', '[\"*\"]', '2024-02-28 19:41:13', NULL, '2024-02-28 19:41:06', '2024-02-28 19:41:13'),
(29, 'App\\Models\\User', 1, 'user1@webtech.id', 'd45b3013c7c6f9e13a9804f7106fbde5d96d0a0d5415e60fb1cffe974ac2a085', '[\"*\"]', '2024-02-28 19:42:28', NULL, '2024-02-28 19:41:18', '2024-02-28 19:42:28'),
(30, 'App\\Models\\User', 1, 'user1@webtech.id', 'efe5e5cd5d4e95e1b979c1dde194b6bcbcf70aedcb6ddbef8995556a2bfa843d', '[\"*\"]', '2024-02-28 19:44:13', NULL, '2024-02-28 19:42:57', '2024-02-28 19:44:13'),
(31, 'App\\Models\\User', 1, 'user1@webtech.id', '9a3184264624499ae2be3c35d71b21b6718c44183824d83a5bbbdd01f165ef98', '[\"*\"]', '2024-02-28 22:03:23', NULL, '2024-02-28 19:44:34', '2024-02-28 22:03:23'),
(32, 'App\\Models\\User', 3, 'user3@worldskills.org', 'a0154d36ce6e308499a5def45e4eb3411f26d566c9558f7a03bc8c964f2e32f6', '[\"*\"]', '2024-02-28 21:50:03', NULL, '2024-02-28 20:20:20', '2024-02-28 21:50:03'),
(33, 'App\\Models\\User', 2, 'user2@webtech.id', '7cc8ee7c1173c0a27d742af9c1672fa876815bf85ad1ff45dc59b26c7d1c980b', '[\"*\"]', '2024-02-28 21:51:29', NULL, '2024-02-28 20:32:02', '2024-02-28 21:51:29');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `form_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `choice_type` enum('short answer','paragraph','date','time','multiple choice','dropdown','checkboxes') NOT NULL DEFAULT 'short answer',
  `choices` varchar(255) DEFAULT NULL COMMENT 'To save choices for multiple choices, dropdown, or checkboxes. Use | to separate choices.',
  `is_required` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `form_id`, `name`, `choice_type`, `choices`, `is_required`) VALUES
(1, 1, 'Name', 'short answer', NULL, 1),
(2, 1, 'Address', 'paragraph', NULL, 0),
(3, 1, 'Born Date', 'date', NULL, 1),
(4, 1, 'Sex', 'multiple choice', 'Male,Female', 1),
(5, 2, 'What does HTML stand for?', 'multiple choice', 'Hyper Text Markup Language,Home Tool Markup Language,Hyperlinks and Text Markup Language', 1),
(6, 2, 'Choose the correct HTML tag for the largest heading:', 'multiple choice', '<heading>,<head>,<h6>,<h1>', 1),
(7, 2, 'What is the correct HTML element for inserting a line break?', 'multiple choice', '<br>,<lb>,<break>', 1),
(8, 2, 'Which character is used to indicate an end tag?', 'multiple choice', '^,*,<,/', 1),
(9, 2, 'Choose the correct typography HTML element', 'checkboxes', '<p>,<h1>,<div>,<b>', 1);

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `form_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`id`, `form_id`, `user_id`, `date`) VALUES
(1, 1, 1, '2022-10-24 14:45:42'),
(5, 1, 2, '2024-02-29 04:50:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`) VALUES
(1, 'User 1', 'user1@webtech.id', NULL, '$2y$10$.8wbP.o/xN.bfDJIpAec0ucGnsqktQy48t2wAW3pdsn7RT6o/JnYe', NULL),
(2, 'User 2', 'user2@webtech.id', NULL, '$2y$10$vdiodsfLMzT57Kt/umss0Oou/42VITSjDMoE6EEcPcfh2krl1lQU2', NULL),
(3, 'User 3', 'user3@worldskills.org', NULL, '$2y$10$LW4eED626qUqH1VF2bVaCuDkROb/xx7JNgexWYVVwfAZyg7p.ZjEy', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allowed_domains`
--
ALTER TABLE `allowed_domains`
  ADD PRIMARY KEY (`id`),
  ADD KEY `allowed_domains_form_id_foreign` (`form_id`);

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `answers_response_id_foreign` (`response_id`),
  ADD KEY `answers_question_id_foreign` (`question_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `forms_slug_unique` (`slug`),
  ADD KEY `forms_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions_form_id_foreign` (`form_id`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `responses_form_id_foreign` (`form_id`),
  ADD KEY `responses_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allowed_domains`
--
ALTER TABLE `allowed_domains`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `responses`
--
ALTER TABLE `responses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `allowed_domains`
--
ALTER TABLE `allowed_domains`
  ADD CONSTRAINT `allowed_domains_form_id_foreign` FOREIGN KEY (`form_id`) REFERENCES `forms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `answers_response_id_foreign` FOREIGN KEY (`response_id`) REFERENCES `responses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `forms`
--
ALTER TABLE `forms`
  ADD CONSTRAINT `forms_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_form_id_foreign` FOREIGN KEY (`form_id`) REFERENCES `forms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `responses`
--
ALTER TABLE `responses`
  ADD CONSTRAINT `responses_form_id_foreign` FOREIGN KEY (`form_id`) REFERENCES `forms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `responses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
