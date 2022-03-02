import { useState } from 'react'

function Bmi() {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(0);
    const [water, setWater] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const heightByMeters = height * 0.01;
        const bmi = (weight) / (heightByMeters * heightByMeters);
        setBmi(bmi.toFixed(2));

        if (age < 55) {
            setWater('40ml/kg');
        } else {
            setWater('30ml/kg');
        }
    }

    return (
        <div className="container" style={{ marginBottom: '80px' }}>
            <form className="bmi-form" onSubmit={handleSubmit}>
                <h2 className="bmi-title">Vui lòng nhập các chỉ số của cơ thể</h2>
                <div className="form-group">
                    <label htmlFor="age">Nhập tuổi</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="30"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Nhập cân nặng(kg)</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="50"
                        value={weight}
                        onChange={(event) => setWeight(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="height">Nhập chiều cao(cm)</label>
                    <input type="number"
                        className="form-control"
                        placeholder="170"
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Tính BMI</button>
            </form>

            <h3>Chỉ số BMI của bạn là: {bmi} </h3>
            <h4>Số ml nước mà cơ thể của bạn cần(theo độ tuổi): {water} </h4>

            <section className="bmi-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Phân loại</th>
                            <th scope="col">BMI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Cân nặng thấp(gầy)</th>
                            <td> &lt; 18.5 </td>
                        </tr>
                        <tr>
                            <th scope="row">Bình thường</th>
                            <td>18.5 - 24.9</td>
                        </tr>
                        <tr>
                            <th scope="row">Thừa cân</th>
                            <td> &gt;= 25</td>
                        </tr>
                        <tr>
                            <th scope="row">Tiền béo phì</th>
                            <td>25 - 29.9</td>
                        </tr>
                        <tr>
                            <th scope="row">Béo phì độ I</th>
                            <td>30 - 34.9</td>
                        </tr>
                        <tr>
                            <th scope="row">Béo phì độ II</th>
                            <td>35 - 39.9</td>
                        </tr>
                        <tr>
                            <th scope="row">Béo phì độ III</th>
                            <td> &gt;= 40</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            {bmi > 0 &&
                <section className="bmi-info">
                    <h2>Bí quyết để đạt được chỉ số BMI chuẩn</h2>
                    <div>
                        <h5>-	Cải thiện chế độ dinh dưỡng</h5>
                        <p>Để đạt được chỉ số BMI chuẩn thì bạn cần chú ý kiểm soát trọng lượng cơ thể, vì vậy mà các bạn nên chú ý ăn uống các loại thực phẩm giàu canxi, collagen type 2, vitamin D… để hỗ trợ chiều cao tăng trưởng nhanh chóng và hiệu quả. Cần chú ý hạn chế ăn nhiều chất béo bởi chúng sẽ khiến cho cân nặng của bạn tăng nhanh</p>
                        <h5>-	Vận động thường xuyên</h5>
                        <p>Vận động là một trong những phương pháp không thể bỏ qua nếu bạn muốn có được chỉ số BMI chuẩn về chiều cao và cân nặng. Khi vận động thường xuyên, lượng mỡ thừa trong cơ thể sẽ bị đánh bay, nhờ đó giúp cho bạn có được một thân hình thon gọn. Ngoài ra, việc vận động thường xuyên cũng góp phần kích thích cơ thể sản sinh nhiều hormone tăng trưởng</p>
                        <p>Hormone tăng trưởng là thành phần không thể thiếu và cần thiết cho sự phát triển của con người, có vai trò quyết định và quan trọng trong quá trình cao lớn. Đây là hormone duy nhất có thể làm cho xương phát triển. Ngoài ra, việc tiết hormone tăng trưởng còn liên quan đến thời kỳ tăng trưởng đỉnh cao, đặc biệt là tuổi dậy thì lượng hormone tăng trưởng tiết ra hàng ngày sẽ tăng lên đáng kể. Khi trưởng thành, sự tiết hormone tăng trưởng giảm dần. Đồng thời, khi bước vô tuổi trưởng thành, phần biểu sinh ở đầu xa của xương dài dần dần đóng lại, và không gian sinh trưởng nhỏ dần cho đến khi nó ngừng phát triển.</p>
                        <h5>-	Ngủ đúng giờ và đủ giấc</h5>
                        <p>Như câu nói: “Con người ta lớn lên trong giấc ngủ”, giấc ngủ có mối quan hệ rất mật thiết với hormone tăng trưởng giúp thúc đẩy sự phát triển của cơ thể.</p>
                        <p>Hormone tăng trưởng là một hoạt chất sinh lý do tuyến yên trước tiết ra, nó có thể tác động trực tiếp lên các mô tế bào khắp cơ thể, thúc đẩy tổng hợp protein trong mô, tăng thể tích và số lượng tế bào, thúc đẩy sự phát triển của cơ thể.</p>
                        <p>Nó cũng có thể thúc đẩy sự gia tăng của tế bào sụn đầu xương của xương dài, đẩy nhanh sự phát triển của xương và sụn, và làm cho cơ thể dần dần tăng lên.</p>
                        <p>Ngoài ra, khoa học cũng đã cho thấy những người thức khuya thường xuyên có tỉ lệ tăng cân cao hơn 36% so với những người thường có thói quen ngủ sớm. Vì vậy các bạn cần chú ý ngủ đúng giờ và đủ giấc để cải thiện chiều cao cân nặng chuẩn của cơ thể nhé</p>
                        <h5>-	Hạn chế ăn vặt</h5>
                        <p>Các loại đồ ăn vặt nhiều dầu mỡ hay các loại đồ ăn ngọt là một trong những nguyên nhân gây ra tình trạng béo phì của bạn, đặc biệt là đối với trẻ nhỏ. Vậy nên nếu như muốn có được chỉ số BMI chuẩn thì các bạn hãy chú ý hạn chế ăn các loại đồ ăn vặt đi nhé</p>
                        <h5>-	Uống nhiều nước</h5>
                        <p>Nghe có vẻ lạ lùng nhưng thực chất việc uống nhiều nước lại có tác động khá hiệu quả đến việc cải thiện vóc dáng cơ thể của bạn đấy nhé. Một số nghiên cứu đã chỉ ra rằng việc uống nhiều nước giúp cải thiện chiều cao cũng như hỗ trợ giảm cân rất hiệu quả. Vì vậy các bạn hãy uống nhiều nước mỗi ngày để cải thiện vóc dáng cơ thể nhé</p>
                        <p>Ưu điểm: Chỉ số BMI rất đơn giản, bạn có thể dễ dàng tính toán và biết được tương đối chính xác về tình trạng cân nặng của bản thân, từ đó có thể điều chỉnh kịp thời trọng lượng cơ thể</p>
                        <p>Nhược điểm: Khi đo lường bằng chỉ số BMI, bạn sẽ không thể nắm rõ được lượng chất béo trong cơ thể là bao nhiêu cũng như đối với những vận động viên thể hình và các mẹ bầu thì chỉ số này không chính xác</p>
                    </div>

                    <h2>Chỉ số BMI có chính xác không?</h2>
                    <div>
                        <p>Bạn thường nghe nói chỉ số BMI là thừa cân hay thiếu cân là thừa cân! Nhưng liệu chỉ số BMI có thực sự quan trọng đến vậy không?</p>
                        <p>WHO hiện phân loại cân nặng của mọi người dựa trên giá trị chỉ số khối cơ thể (BMI). Tuy nhiên, vẫn còn một số tranh cãi về chỉ số nàybởi thành phần cơ thể của mỗi người là khác nhau, chẳng hạn như: giới tính, tuổi tác và chủng tộc ảnh hưởng đến giới hạn trọng lượng cơ thể</p>
                        <p>Dựa trên bằng chứng cho thấy chất béo trong cơ thể không khiến một người nặng hơn một người có cùng chiều cao, chúng ta phải biết rằng các yếu tố như khối lượng cơ, mật độ xương và thậm chí cả chất lỏng cũng có thể ảnh hưởng đến cân nặng của một người.</p>
                        <p>Một số người cho rằng vì chỉ số BMI bỏ qua điểm này nên mặc dù nguy cơ mắc các bệnh liên quan đến béo phì và lối sống lành mạnh là nhỏ, nhưng các vận động viên hoặc những người có tỷ lệ cơ bắp cao hơn thường được xếp vào nhóm thừa cân vì điều này.</p>
                        <p>Với nhiều đơn vị y tế, bệnh viện, phòng khám chỉ số BMI được sử dụng làm giá trị đánh giá chính để xác định một người có nguy cơ béo phì hay không. Tuy nhiên, ngoài việc sử dụng chỉ số BMI để đánh giá nguy cơ béo phì của một người thì cần kết hợp các chỉ số khác đo vòng eo, đo mức cholesterol và đường huyết.</p>
                    </div>

                    <h2>Chỉ số BMI cao có thể dẫn đến những căn bệnh nào?</h2>
                    <div>
                        <p>Thông qua chỉ số BMI cao, các bạn cần chú ý nguy cơ mắc phải những căn bệnh sau đây nhé</p>
                        <ul>
                            <li style={{ marginLeft: "40px" }}>Huyết áp cao</li>
                            <li style={{ marginLeft: "40px" }}>Cholesterol cao</li>
                            <li style={{ marginLeft: "40px" }}>Bệnh gan</li>
                            <li style={{ marginLeft: "40px" }}>Bệnh tiểu đường</li>
                            <li style={{ marginLeft: "40px" }}>Viêm khớp</li>
                            <li style={{ marginLeft: "40px" }}>Chứng ngưng thở lúc ngủ.</li>
                        </ul>
                        <p>Ở đây không có nghĩa là khi chỉ số BMI quá cao thì bạn sẽ mắc phải những căn bệnh này đâu nhé, đây chỉ là danh sách những căn bệnh mà những người thừa cân thường có nguy cơ mắc phải, qua đó bạn cần chú ý hơn trong chế độ ăn uống, sinh hoạt để hạn chế căn bệnh này</p>
                    </div>

                    <h2>Lợi ích của việc duy trì chỉ số BMI hợp lý</h2>
                    <div>
                        <ul>
                            <li style={{ marginLeft: "40px" }}>Hạn chế nguy cơ mắc các bệnh tim mạch</li>
                            <li style={{ marginLeft: "40px" }}>Hạn chế nguy cơ loãng xương</li>
                            <li style={{ marginLeft: "40px" }}>Hạn chế nguy cơ đột quỵ</li>
                            <li style={{ marginLeft: "40px" }}>Giảm nguy cơ tiểu đường</li>
                            <li style={{ marginLeft: "40px" }}>Giải tỏa áp lực lên xương và khớp</li>
                            <li style={{ marginLeft: "40px" }}>Hỗ trợ tăng chiều cao hiệu quả</li>
                            <li style={{ marginLeft: "40px" }}>Giảm nguy cơ thiếu máu</li>
                        </ul>
                        <h3>Các thời gian uống nước hợp lý</h3>
                        <ul>
                            <li style={{ marginLeft: "40px" }}>7:00 uống 1 ly nước ngay sau khi thức dậy</li>
                            <li style={{ marginLeft: "40px" }}>9:00 uống ly nước bắt đầu ngày làm việc, khoảng 1 giờ sau khi ăn sáng</li>
                            <li style={{ marginLeft: "40px" }}>11:30 uống ly nước 30 phút trước khi ăn trưa </li>
                            <li style={{ marginLeft: "40px" }}>13:30 uống ly nước 1 giờ sau bữa trưa</li>
                            <li style={{ marginLeft: "40px" }}>15:00 uống ly nước giúp cơ thể tỉnh táo</li>
                            <li style={{ marginLeft: "40px" }}>17:00  uống ly nước tránh ăn nhiều vào bữa tối</li>
                            <li style={{ marginLeft: "40px" }}>20:00 uống ly nước sau ăn tối 1 giờ</li>
                            <li style={{ marginLeft: "40px" }}>22:00 Ly nước cuối cùng của ngày, trước khi đi ngủ. Hỗ trợ quá trình tái tạo tế bào trong khi ngủ</li>
                        </ul>
                    </div>

                    <h2>Lợi ích của việc uống đầy đủ nước</h2>
                    <div>
                        <p>Các khớp của cơ thể hoạt động tốt hơn</p>
                        <p>Nước chiếm một phần lớn trong sụn khớp của bạn, giúp hấp thụ sốc và giúp các chuyển động của xương chống lại xương diễn ra trơn tru hơn. Nước cũng có thể giúp ngăn ngừa bệnh gút -một tình trạng đau khớp. Hơn nữa, tác dụng của uống đủ nước sẽ giúp thải độc tố ra khỏi cơ thể có thể gây viêm khớp.</p>
                        <ol>
                            <li style={{ marginLeft: "40px" }}>Giúp bạn đổ mồ hôi</li>
                            <p>Đổ mồ hôi diễn ra được xem như một điều tốt cho cơ thể. Khi mồ hôi bốc hơi ra khỏi da, thì sẽ làm cho cơ thể hạ bớt nhiệt. Vì vậy, bạn nên uống thêm một vài cốc nước trong vài giờ trước khi bạn ra ngoài tập thể dục. Thêm vào đó, bạn hãy cố gắng uống khoảng 10 ngụm lớn sau mỗi 15 phút hoặc lâu hơn trong quá trình tập luyện của bạn. Tuy nhiên, bạn có thể không thấy mồ hôi bị mất đi nếu bạn luyện tập ở trong hồ bơi hoặc phòng tập thể dục có máy lạnh.</p>
                            <li style={{ marginLeft: "40px" }}>Bạn có thể tránh được tình trạng mất nước</li>
                            <p>Nếu không có đủ nước, bạn có thể mất quá nhiều chất lỏng. Bạn cũng có thể mất natri và kali mà cơ thể cần, đặc biệt đúng khi trời nắng nóng. Khi tình trạng này xảy ra, bạn có thể có cảm giác khát, đi tiểu ít hơn bình thường và miệng có thể bị khô. Thêm vào đó, bạn có thể gặp các cảm giác như: Chóng mặt, choáng váng và bối rối.</p>
                            <li style={{ marginLeft: "40px" }}>Thận của bạn khoẻ mạnh hơn</li>
                            <p>Nước giúp thận loại bỏ cũng như đào thải chất thải ra khỏi máu và cơ thể. Nếu bạn không nhận đủ nước, chất thải đó - cùng với axit - có thể tích tụ, có thể dẫn đến việc thận của bạn bị tắc nghẽn bởi các protein gọi là myoglobin. Mất nước cũng có thể dẫn đến các tình trạng bệnh lý của sỏi thận và nhiễm trùng đường tiết niệu.</p>
                            <li style={{ marginLeft: "40px" }}>Giữ cho bộ não của bạn nhạy bén</li>
                            <p>Bạn cũng có thể không nhớ, không suy nghĩ rõ ràng hoặc dễ dàng tập trung khi bạn mất nước. Và tình trạng mất nước của bạn không nghiêm trọng. Tuy nhiên, khi xảy ra mất nước có thể xảy ra nếu bạn chỉ kém một chút so với nơi bạn phải ở.</p>
                        </ol>
                    </div>


                    <h2>Tác hại của việc không uống đấy đủ nước</h2>
                    <div>
                        <ol>
                            <li style={{ marginLeft: "40px" }}>Tăng nguy cơ đột quỵ</li>
                            <p>Theo một nghiên cứu, mất nước không chỉ có thể khiến một người mất nhiều thời gian hơn để phục hồi sau đột quỵ mà còn thực sự có thể làm cho bệnh nặng hơn. Nếu không thích uống nước, hãy thử một loại nước trái cây như cam, theo Eat this, not that.</p>
                            <li style={{ marginLeft: "40px" }}>Thận hoạt động kém</li>
                            <p>Để thận hoạt động tốt, cần nước để làm loãng máu. Không có đủ nước, thận phải làm việc quá sức để lọc máu. Và mất nước nghiêm trọng cũng có thể dẫn đến suy thận hoặc tệ hơn là sỏi thận.</p>
                            <li style={{ marginLeft: "40px" }}>Tim hoạt động kém</li>
                            <p>Khi mất nước, tim phải làm việc nhiều hơn để duy trì lưu lượng máu khi đứng lên. Nếu mất quá nhiều nước, trái tim sẽ không theo kịp nhiệm vụ này, lưu lượng máu đến não không đủ có thể dẫn đến ngất xỉu.</p>
                            <li style={{ marginLeft: "40px" }}>Nam giới có thể gặp rối loạn chức năng "yêu"</li>
                            <p>Sự thật phũ phàng? Nam giới không uống đủ nước cũng giống như cây thiếu nước, sẽ bị “xìu”. Ở trạng thái mất nước, cơ thể sản xuất một lượng angiotensin lớn hơn, một loại hoóc môn thường thấy ở những người đàn ông gặp khó khăn trong việc đạt được sự cương cứng ổn định, theo Eat this, not that.</p>
                            <li style={{ marginLeft: "40px" }}>Rối loạn chức năng đường ruột</li>
                            <p>Cơ thể cần được cung cấp đủ nước để tiêu hóa thức ăn đúng cách và hấp thụ các chất dinh dưỡng tan trong nước như vitamin B và vitamin C. Đối với ruột, thiếu nước có thể giúp cản trở tiêu hóa và tăng nguy cơ táo bón và rối loạn tiêu hóa.</p>
                            <li style={{ marginLeft: "40px" }}>Mất tập trung</li>
                            <p>Não bộ được cấu tạo từ 80% là nước, do đó, khả năng và chức năng của bộ não phụ thuộc nghiêm trọng vào nước. Ngay cả mất nước nhẹ cũng làm suy yếu khả năng của não, gây khó khăn cho khả năng suy nghĩ. Một nghiên cứu trên tạp chí Nutrients cho thấy uống nước có thể ngăn ngừa mất trí nhớ và ngăn chặn suy giảm sự chú ý.</p>
                        </ol>
                    </div>
                </section>
            }

        </div>
    )
}

export default Bmi