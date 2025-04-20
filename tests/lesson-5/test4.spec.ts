import { test } from "@playwright/test";

test("Add personal notes", async ({ page }) => {
    const notes = [
        {title: "Hố đen đơn độc đầu tiên được xác nhận", 
        content: "Các nhà khoa học xác nhận sự tồn tại của hố đen đơn độc cách Trái Đất 5.000 năm ánh sáng, di chuyển với tốc độ 51 km mỗi giây." },
        {title: "Chip 2 nm tiên tiến nhất thế giới", 
        content: "Chip 2 nm mới được phát triển, đánh dấu bước tiến lớn trong công nghệ bán dẫn, hứa hẹn cải thiện hiệu suất và tiết kiệm năng lượng cho các thiết bị điện tử." },
        {title: "Trung Quốc phát hiện mỏ thạch anh hơn 35 triệu tấn", 
        content: "Một mỏ thạch anh khổng lồ với trữ lượng hơn 35 triệu tấn vừa được phát hiện tại Trung Quốc, mở ra cơ hội lớn cho ngành công nghiệp điện tử và năng lượng." },
        {title: "Anh hút CO₂ từ nước biển để đối phó biến đổi khí hậu", 
        content: "Các nhà khoa học Anh phát triển phương pháp hút CO₂ trực tiếp từ nước biển, giúp giảm lượng khí nhà kính và chống lại biến đổi khí hậu." },
        {title: "Cá 'hóa thạch sống' nặng kỷ lục cắn câu", 
        content: "Một cần thủ Mỹ bắt được con cá láng lớn Bắc Mỹ khổng lồ sau 4 giờ vật lộn, có thể phá kỷ lục thế giới về loài cá 'hóa thạch sống' này." },
        {title: "Châu Âu sắp phóng đồng hồ chính xác nhất trong vũ trụ", 
        content: "Cơ quan Vũ trụ châu Âu (ESA) sẽ phóng đồng hồ chính xác đến mức lệch chưa đến một giây sau hơn 300 triệu năm lên trạm ISS để kiểm tra thuyết tương đối rộng." },
        {title: "AI khám phá những bí ẩn về Mặt Trời", 
        content: "Nhờ AI, các nhà nghiên cứu có thể nâng cấp dữ liệu hình ảnh từ thiết bị cũ và thu được ảnh chụp rõ nét hơn về bề mặt Mặt Trời." },
        {title: "Lò phản ứng hạt nhân thorium đầu tiên trên thế giới hoạt động", 
        content: "Lò phản ứng muối nóng chảy thorium đầu tiên trên thế giới nằm ở sa mạc Gobi tạo ra 2 megawatt nhiệt lượng và không tạo ra chất thải độc hại." },
        {title: "Phát hiện bằng chứng về sự sống ngoài hành tinh", 
        content: "Các nhà khoa học đã tìm thấy thêm bằng chứng về khả năng tồn tại của khí sinh học trên ngoại hành tinh K2-18b, củng cố khả năng nó có thể hỗ trợ sự sống ngoài hành tinh." },
        {title: "AI tìm kiếm những hành tinh giống Trái Đất", 
        content: "Các nhà nghiên cứu phát triển thuật toán giúp xác định 44 hệ sao có khả năng tồn tại hành tinh giống Trái Đất nằm trong vùng ở được quanh sao chủ." },
    ];

        await test.step("Truy cập trang https://material.playwrightvn.com/", async () => {
            await page.goto("https://material.playwrightvn.com/");
        });
        await test.step("Click vào 'Bài học 4: Personal notes'", async () => {
            await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
        });
        await test.step("Thêm mới 10 note", async () => {
            for (const note of notes) {
                await page.locator('//input[@type="text" and @id="note-title"]').fill(note.title);
                await page.locator('//textarea[@id="note-content"]').fill(note.content);
                await page.locator('//button[@id="add-note"]').click();
            }
        });
    
        await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
            await page.locator('//input[@type= "text" and @id= "search"]').fill('AI');
        });
});
