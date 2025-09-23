#!/usr/bin/env python3
"""
Database initialization script
Creates tables and initial admin user
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import sqlite3
from app.core.database import init_database, get_db_connection
from app.core.security import get_password_hash


def create_admin_user():
    """Create initial admin user"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # Check if admin user already exists
        cursor.execute("SELECT id FROM users WHERE username = ?", ("admin",))
        if cursor.fetchone():
            print("Admin user already exists!")
            return
        
        # Create admin user
        hashed_password = get_password_hash("admin123")
        cursor.execute("""
            INSERT INTO users (email, username, hashed_password, full_name, role, is_active)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            "admin@example.com",
            "admin",
            hashed_password,
            "System Administrator",
            "admin",
            True
        ))
        
        conn.commit()
        print("Admin user created successfully!")
        print("Username: admin")
        print("Password: admin123")
        print("Please change the password after first login!")
        
    except Exception as e:
        print(f"Error creating admin user: {e}")
        conn.rollback()
    finally:
        conn.close()


def main():
    """Main initialization function"""
    print("Initializing database...")
    init_database()
    create_admin_user()
    print("Database initialization complete!")


if __name__ == "__main__":
    main()