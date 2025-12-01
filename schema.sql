-- Create servers table
CREATE TABLE IF NOT EXISTS servers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    original_price DECIMAL(10, 2) NOT NULL,
    cpu VARCHAR(255) NOT NULL,
    ram VARCHAR(100) NOT NULL,
    storage VARCHAR(100) NOT NULL,
    bandwidth VARCHAR(100) NOT NULL,
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample servers (you can replace these with real data)
INSERT INTO servers (title, price, original_price, cpu, ram, storage, bandwidth, in_stock) VALUES
('Dual Intel Xeon E5-2660', 55.00, 50.00, 'Dual Intel Xeon E5-2660', '64GB RAM', '2x480GB SSD', 'Unmetered', true),
('AMD Ryzen 9 5950X', 132.00, 120.00, 'AMD Ryzen 9 5950X', '128GB RAM', '2x1TB NVMe', '100TB', true),
('Intel Xeon E-2288G', 88.00, 80.00, 'Intel Xeon E-2288G', '32GB RAM', '2x512GB NVMe', 'Unmetered', true),
('Dual Intel Xeon Gold 6248R', 220.00, 200.00, 'Dual Intel Xeon Gold 6248R', '256GB RAM', '4x1TB NVMe', 'Unmetered', true),
('AMD EPYC 7502P', 165.00, 150.00, 'AMD EPYC 7502P', '128GB RAM', '2x960GB SSD', '100TB', true),
('Intel Core i9-12900K', 110.00, 100.00, 'Intel Core i9-12900K', '64GB RAM', '2x1TB NVMe', 'Unmetered', true),
('Dual Intel Xeon E5-2697 v4', 143.00, 130.00, 'Dual Intel Xeon E5-2697 v4', '128GB RAM', '4x480GB SSD', 'Unmetered', true),
('AMD Ryzen 9 7950X', 176.00, 160.00, 'AMD Ryzen 9 7950X', '128GB RAM', '2x2TB NVMe', '100TB', true),
('Intel Xeon E-2386G', 99.00, 90.00, 'Intel Xeon E-2386G', '64GB RAM', '2x1TB NVMe', 'Unmetered', true),
('Dual AMD EPYC 7713', 330.00, 300.00, 'Dual AMD EPYC 7713', '512GB RAM', '4x2TB NVMe', 'Unmetered', true);
