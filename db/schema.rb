# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_12_002937) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "followings", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "followed_user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followed_user_id"], name: "index_followings_on_followed_user_id"
    t.index ["user_id", "followed_user_id"], name: "index_followings_on_user_id_and_followed_user_id", unique: true
    t.index ["user_id"], name: "index_followings_on_user_id"
  end

  create_table "follows", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "followee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "followee_id"], name: "index_follows_on_user_id_and_followee_id", unique: true
  end

  create_table "galleries", force: :cascade do |t|
    t.string "title", null: false
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
  end

  create_table "picture_likes", force: :cascade do |t|
    t.bigint "liker_id", null: false
    t.integer "picture_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liker_id", "picture_id"], name: "index_picture_likes_on_liker_id_and_picture_id", unique: true
  end

  create_table "pictures", force: :cascade do |t|
    t.string "location", null: false
    t.integer "uploader_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "caption"
    t.string "title", null: false
    t.index ["uploader_id"], name: "index_pictures_on_uploader_id"
  end

  create_table "pictures_to_galleries", force: :cascade do |t|
    t.integer "picture_id", null: false
    t.integer "gallery_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["picture_id", "gallery_id"], name: "index_pictures_to_galleries_on_picture_id_and_gallery_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "followings", "users"
  add_foreign_key "galleries", "users", column: "creator_id"
  add_foreign_key "pictures", "users", column: "uploader_id"
end
