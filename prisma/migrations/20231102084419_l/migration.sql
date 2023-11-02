/*
  Warnings:

  - You are about to drop the column `userId` on the `Review` table. All the data in the column will be lost.
  - Added the required column `raview` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "bookId" INTEGER,
    "reviewId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserActivity_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserActivity" ("action", "bookId", "createdAt", "id", "reviewId", "userId") SELECT "action", "bookId", "createdAt", "id", "reviewId", "userId" FROM "UserActivity";
DROP TABLE "UserActivity";
ALTER TABLE "new_UserActivity" RENAME TO "UserActivity";
CREATE TABLE "new_Reply" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "reviewId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Reply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reply" ("content", "createdAt", "id", "reviewId", "userId") SELECT "content", "createdAt", "id", "reviewId", "userId" FROM "Reply";
DROP TABLE "Reply";
ALTER TABLE "new_Reply" RENAME TO "Reply";
CREATE TABLE "new_Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "raview" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "content" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("bookId", "content", "createdAt", "id") SELECT "bookId", "content", "createdAt", "id" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
