CREATE TABLE `practice_events` (
	`user_id` text NOT NULL,
	`id` text NOT NULL,
	`kind` text NOT NULL,
	`target` text NOT NULL,
	`grade` integer NOT NULL,
	`at` integer NOT NULL,
	PRIMARY KEY(`user_id`, `id`)
);
--> statement-breakpoint
CREATE INDEX `user_time` ON `practice_events` (`user_id`,`at`);