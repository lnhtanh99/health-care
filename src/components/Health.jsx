import { useState } from 'react'

function Health() {
    const [position, setPosition] = useState('Xương khớp');
    const [sex, setSex] = useState('Nam');
    const [predict, setPredict] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handlePosition = (event) => {
        setPredict(false);
        setPosition(event.target.value);
    }

    return (
        <div className="container" style={{ marginBottom: '80px' }}>
            <form className="health-form" onSubmit={handleSubmit}>
                <h2 className="health-title">Chẩn đoán bệnh dựa trên triệu chứng</h2>
                <div className="form-group">
                    <label htmlFor="sex" style={{ fontWeight: "bold" }}>Chọn giới tính</label>
                    <select
                        className="form-control"
                        value={sex}
                        onChange={(event) => setSex(event.target.value)}
                    >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="position" style={{ fontWeight: "bold" }}>Chọn vị trí trên cơ thể cần chẩn đoán</label>
                    <select
                        className="form-control"
                        value={position}
                        onChange={handlePosition}
                    >
                        <option value="Bệnh tim mạch">Bệnh tim mạch</option>
                        <option value="Xương khớp">Xương khớp</option>
                        <option value="Thần kinh trung ương">Thần kinh trung ương</option>
                        <option value="Hệ tiết niệu">Hệ tiết niệu</option>
                        <option value="Hệ hô hấp">Hệ hô hấp</option>
                        <option value="Hệ tiêu hóa">Hệ tiêu hóa</option>
                        <option value="Hệ sinh dục">Hệ sinh dục</option>
                    </select>
                </div>
                <label htmlFor="symptoms" style={{ fontWeight: "bold" }}>Chọn các triệu chứng</label>
                {position === 'Bệnh tim mạch' &&
                    <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Đau thắt ngực, rối loạn nhịp tim, huyết áp tăng hoặc giảm đột ngột
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Khó thở, thường xuyên mệt mỏi, chóng mặt, ngất xỉu,
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Ho dai dẳng, buồn nôn, chán ăn
                            </label>
                        </div>
                    </>
                }


                {position === 'Xương khớp' &&
                    <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Đau khớp
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Sưng, nóng và đỏ khớp
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Cứng khớp
                            </label>
                        </div>
                    </>
                }

                {position === 'Thần kinh trung ương' &&
                    <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Không cảm thấy đau ngực, chẳng hạn như đau thắt ngực hoặc nhồi máu cơ tim.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Tiết quá nhiều hoặc quá ít mồ hôi.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Cảm giác lâng lâng.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Khô mắt và miệng.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Táo bón.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Rối loạn chức năng bàng quang.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Rối loạn chức năng tình dục.
                            </label>
                        </div>
                    </>
                }

                {position === 'Hệ tiết niệu' &&
                    <>
                        {sex === 'Nam' ?
                            <>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        Rối loạn tiểu tiện
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        Nước tiểu có màu bất thường
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        Ngứa ngáy/sưng vùng niệu đạo
                                    </label>
                                </div>
                            </>
                            :
                            <>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        Luôn có cảm giác buồn tiểu, đi tiểu nhiều lần và tiểu liên tục.
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        Lượng nước tiểu ít trong mỗi lần tiểu, tiểu buốt, tiểu rắt.
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        Cảm giác đau rát mỗi khi đi tiểu.
                                    </label>
                                </div>
                            </>
                        }
                    </>
                }

                {position === 'Hệ hô hấp' &&
                    <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Hắt hơi, sổ mũi, chảy mũi nước
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Đau rát họng gây ho, tức ngực, có khi gây khó thở.
                            </label>
                        </div>
                    </>
                }

                {position === 'Hệ tiêu hóa' &&
                    <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Đau vùng bụng trên rốn,Đầy bụng, khó tiêu, buồn nôn hay nôn,Ợ hơi, ợ chua, hoặc nóng rát thượng vị,Rối loạn tiêu hóa
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Ợ hơi, ợ nóng, ợ chua,Buồn nôn, nôn,Đau tức ngực thượng vị,Khó nuốt
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Đau bụng(Các triệu chứng rối loạn tiêu hóa thường xuất hiện sau bữa ăn, có thể kèm theo buồn nôn và nôn),Rối loạn tiêu hóa
                            </label>
                        </div>
                    </>
                }

                {position === 'Hệ sinh dục' &&
                    <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Tiết dịch âm đạo có màu máu, tối sẫm hoặc có mùi tanh,Đi tiểu liên tục,Đau xương chậu hoặc vùng bụng
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Tiểu ngập ngừng, ngắt quãng,Đi tiểu liên tục, tiểu nhiều vào ban đêm,Tiểu són, cảm giác tiểu không hết
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Tiểu khó, tiểu rắt, bí tiểu, Trong nước tiểu có máu, Tiểu đêm
                            </label>
                        </div>
                    </>
                }
            </form>
            <button className="btn btn-primary" onClick={() => setPredict(true)}>Chấn đoán</button>
            <h3 style={{ marginTop: '10px' }}>Các bệnh có thể gặp phải là:</h3>
            {predict &&
                <>
                    {position === 'Bệnh tim mạch' &&
                        <>
                            <p>Suy tim: Là tình trạng tim bị yếu, không thể thực hiện chức năng bơm máu đi nuôi cơ thể hiệu quả. Bệnh có 4 mức độ, bao gồm: Suy tim tiềm tàng, suy tim nhẹ, suy tim trung bình, suy tim nặng.</p>
                            <p>Nhồi máu cơ tim: Nhồi máu cơ tim là hiện tượng một cục huyết khối đột ngột làm tắc động mạch vành (mạch máu nuôi xung quanh quả tim). Hiện tượng này làm cho máu không chảy đến nuôi được phần cơ tim và làm một phần cơ tim bị chết đi.</p>
                            <p>Viêm cơ tim: Là bệnh tim mạch có thể xảy ra ở cả người khỏe mạnh, chưa từng mắc bệnh tim, viêm cơ tim có tỷ lệ đột tử cao nếu không phát hiện và điều trị kịp thời. Theo các bác sĩ, nguyên nhân gây bệnh là do các loại siêu vi trùng (nhất là siêu vi trùng Coxacki), hóa chất hoặc sự gia tăng hormone tuyến giáp.</p>
                        </>
                    }
                    {position === 'Xương khớp' &&
                        <>
                            <p>Thoái hóa khớp: Là tình trạng tổn thương phần sụn khớp và xương dưới sụn, có phản ứng viêm và giảm dịch khớp. </p>
                            <p>Loãng xương: Là một tình trạng rối loạn chuyển hóa của bộ xương làm giảm sức mạnh của xương dẫn đến làm tăng nguy cơ gãy xương.</p>
                            <p>Thoát vị đĩa đệm: Là tình trạng khi nhân nhầy của đĩa đệm cột sống chệch ra khỏi vị trí bình thường, xuyên qua dây chằng chèn ép vào các rễ thần kinh gây tê bì, đau nhức.</p>
                        </>
                    }
                    {position === 'Hệ tiết niệu' &&
                        <>
                            <p>Sỏi hệ niệu:  Là tên gọi chung của các bệnh lý do sỏi hiện diện tại bất kỳ cơ quan nào trên con đường tạo ra và đào thải nước tiểu. Trong đó, nguồn gốc hình thành sỏi là tại thận, là kết quả của sự lắng đọng dựa trên nồng độ cao các tinh thể thải ra trong nước tiểu.</p>
                            <p>Rối loạn cương dương: Là một bệnh lý thuộc hệ tiết niệu. Đây là tình trạng khiến cho khả năng tình dục ở nam giới bị ảnh hưởng rất nhiều. Nguyên nhân phổ biến nhất của rối loạn chức năng cương dương là hạn chế lưu lượng máu đến bộ phận sinh dục.</p>
                            <p>Nhiễm trùng đường tiết niệu: Là khi có sự hiện diện của vi khuẩn gây bệnh hoặc virus xâm nhập đường tiết niệu và gây nhiễm trùng.</p>
                        </>
                    }
                    {position === 'Thần kinh trung ương' &&
                        <>
                            <p>Tai biến mạch máu não (Đột quỵ): Thuật ngữ “tai biến mạch máu não” (CVA) dùng để chỉ sự thay đổi lưu lượng máu não. </p>
                            <p>Bệnh Parkinson: Parkinson là bệnh rối loạn hệ thần kinh tiến triển, ảnh hưởng chủ yếu đến chức năng vận động và nhiều chức năng ngoài vận động khác. </p>
                            <p>Bệnh Alzheimer (Sa sút trí tuệ): Là một trong những dạng rối loạn thần kinh dẫn đến sa sút trí tuệ thường gặp nhất ở những người trên 65 tuổi. </p>
                        </>
                    }
                    {position === 'Hệ hô hấp' &&
                        <>
                            <p>Viêm họng mãn tính kéo dài (thường gọi là viêm họng hạt).</p>
                            <p>Viêm mũi mạn tính rát.</p>
                            <p>Viêm phế quản.</p>
                        </>
                    }
                    {position === 'Hệ tiêu hóa' &&
                        <>
                            <p>Trào ngược dạ dày – thực quản.</p>
                            <p>Viêm loét dạ dày – tá tràng.</p>
                            <p>Sỏi mật.</p>
                        </>
                    }
                    {position === 'Hệ sinh dục' &&
                        <>
                            <p>Ung thư phụ khoa.</p>
                            <p>U xơ tiền liệt tuyến.</p>
                            <p>Ung thư tuyến tiền liệt.</p>
                        </>
                    }
                </>
            }
            <h3>Các giải pháp và phương pháp chữa bệnh hiệu quả:</h3>
            {predict &&
                <>
                    {position === 'Bệnh tim mạch' &&
                        <>
                            <p>Bỏ hút thuốc.</p>
                            <p>Kiểm soát các tình trạng sức khỏe khác, chẳng hạn như huyết áp cao, cholesterol cao và bệnh tiểu đường.</p>
                            <p>Tập thể dục ít nhất 30 phút mỗi ngày trong tuần.</p>
                            <p>Ăn một khẩu phần ăn ít muối và chất béo bão hòa.</p>
                            <p>Duy trì trọng lượng khỏe mạnh.</p>
                        </>
                    }
                    {position === 'Xương khớp' &&
                        <>
                            <p>Liệu pháp lạnh (giảm viêm, giảm đau, và giảm lưu lượng máu về khu vực tổn thương).</p>
                            <p>Chườm ấm/ tắm nước ấm.</p>
                            <p>Ngâm chân tay với nước sắc thảo dược.</p>
                            <p>Xoa bóp khi cần thiết thiết.</p>
                            <p>Nghỉ ngơi đều đặn.</p>
                            <p>Tập thể dục thường xuyên.</p>
                            <p>Ăn uống lành mạnh.</p>
                        </>
                    }
                    {position === 'Hệ tiết niệu' &&
                        <>
                            <p>Chế độ ăn uống: Bổ sung đầy đủ nước mỗi ngày (30-40ml/kg), bổ sung các loại nước ép hoa quả, các thực phẩm lợi khuẩn, vitamin C + chất xơ và tránh xa chất kích thích,...</p>
                            <p>Chế độ sinh hoạt: Đi tiểu ngay khi có nhu cầu, chú ý vệ sinh bộ phận kín sạch sẽ, nhẹ nhàng và đúng cách, sinh hoạt vợ chồng lành mạnh,...</p>
                        </>
                    }
                    {position === 'Thần kinh trung ương' &&
                        <>
                            <p>Duy trì chế độ ăn uống lành mạnh (Chế độ ăn uống đóng vai trò rất quan trọng đối với sức khỏe não bộ).</p>
                            <p>Tập luyện cho bộ não. </p>
                            <p>Bảo vệ vùng đầu. </p>
                            <p>Tránh xa rượu bia, thuốc lá.</p>
                            <p>Có chế độ thư giãn và nghỉ ngơi hợp lý.</p>
                        </>
                    }
                    {position === 'Hệ hô hấp' &&
                        <>
                            <p>Cần mặc đủ ấm, ngủ ấm, tránh gió lùa. Khi nhiệt độ thay đổi đột ngột từ nóng chuyển sang lạnh hoặc lạnh vừa chuyển sang rét đậm thì người cao tuổi nên hạn chế ra khỏi nhà lúc sáng sớm. Có thể vẫn tập thể dục hoặc đi lại, vận động thân thể ở trong nhà không nên ra khỏi nhà khi thời tiết còn lạnh nhất là lúc đang có gió mùa.</p>
                        </>
                    }
                    {position === 'Hệ tiêu hóa' &&
                        <>
                            <p>Đảm bảo chế độ dinh dưỡng khoa học: Bổ sung nhiều rau và chất xơ; uống nhiều nước; ưu tiên thức ăn mềm, lỏng, được nấu chín; không ăn quá no; tránh sử dụng rượu bia, các thực phẩm cay nóng như ớt, hạt tiêu;…</p>
                            <p>Luyện tập thể thao, vận động hàng ngày để tăng cường sức khỏe, miễn dịch và cải thiện chức năng tiêu hóa.</p>
                            <p>Trao đổi với bác sĩ về các loại thuốc đang dùng, tránh ảnh hưởng đến cơ quan tiêu hóa.</p>
                            <p>Giữ tinh thần thoải mái, hạn chế tối đa căng thẳng, lo lắng, bực tức.</p>
                        </>
                    }
                    {position === 'Hệ sinh dục' &&
                        <>
                            <p>Xây dựng chế độ ăn uống lành mạnh ít thịt đỏ và bổ sung nhiều chất xơ,Có một chế độ sinh hoạt khoa học và đều đặn.</p>
                            <p>Hạn chế dùng đồ uống vào buổi tối; Hạn chế caffeine và rượu; Hạn chế dùng thuốc thông mũi hoặc kháng histamin; Không nhịn tiểu; Đi tiểu đều đặn</p>
                            <p>Không nên kết hôn, sinh đẻ quá sớm, sinh nhiều con, quan hệ tình dục với nhiều người.</p>
                        </>
                    }
                </>
            }
        </div>
    )
}

export default Health